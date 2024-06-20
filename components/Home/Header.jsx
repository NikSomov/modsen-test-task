import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Colors } from './../../constants/Colors';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Header() {
    const { user } = useUser();
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search/${searchQuery}`);
        }
    };

    return (
        <View style={{
            padding: 20,
            paddingTop: 20,
            backgroundColor: Colors.BLACK,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
            }}>
                <Image 
                    source={{ uri: user?.imageUrl }}
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 99,
                    }}
                />
                <View>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'comfortaa-r',
                        color: '#ffff'
                    }}>Welcome, </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'comfortaa-r',
                        color: '#ffff'
                    }}>{user?.fullName}</Text>
                </View>
            </View>
            {/* Search Bar */}
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                backgroundColor: '#ffff',
                padding: 10,
                marginVertical: 10,
                marginTop: 15,
                borderRadius: 3
            }}>
                <Octicons name="search" size={24} color="black" />
                <TextInput 
                    placeholder='Search....'
                    style={{
                        fontFamily: 'comfortaa-r',
                        fontSize: 16,
                        flex: 1
                    }}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Text style={{
                        fontFamily: 'comfortaa-r',
                        fontSize: 16,
                        color: 'black'
                    }}></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
