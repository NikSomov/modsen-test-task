import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Colors } from './../../constants/Colors';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Header = () => {
    const { user } = useUser();
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search/${searchQuery}`);
        }
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.userInfo}>
                <Image 
                    source={{ uri: user?.imageUrl }}
                    style={styles.userImage}
                />
                <View>
                    <Text style={styles.userInfoText}>Welcome, </Text>
                    <Text style={styles.userInfoText}>{user?.fullName}</Text>
                </View>
            </View>
            <View style={styles.searchBar}>
                <Octicons name="search" size={24} color="black" />
                <TextInput 
                    placeholder='Search....'
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        paddingTop: 20,
        backgroundColor: Colors.BLACK,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    userInfoText: {
        fontSize: 16,
        fontFamily: 'comfortaa-r',
        color: Colors.PWHITE,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 3,
    },
    searchInput: {
        fontFamily: 'comfortaa-r',
        fontSize: 16,
        flex: 1,
    },
    searchButton: {
        fontFamily: 'comfortaa-r',
        fontSize: 16,
        color: 'black',
    },
});

export default Header;
