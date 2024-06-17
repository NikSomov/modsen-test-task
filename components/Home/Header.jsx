import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Colors } from './../../constants/Colors';
import { Octicons } from '@expo/vector-icons';

export default function Header() {

    {/* GET USER DATA */}
    const {user}=useUser();

  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.DARK,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:20,
        }}>
            <Image source={{uri:user?.imageUrl}}
            style={{
                width:45,
                height:45,
                borderRadius:99,
            }}
            />
            <View>
                <Text style={{
                    fontSize:14,
                    fontFamily:'comfortaa-r',
                    color:'#ffff'
                }}>Welcome, </Text>
                <Text style={{
                    fontSize:18,
                    fontFamily:'comfortaa-r',
                    color:'#ffff'
                }}>{user?.fullName}</Text>
            </View>
        </View>
                        {/*Search Bar*/}
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor:'#ffff',
        padding:10,
        marginVertical:10,
        marginTop:15,
        borderRadius:8
      }}>
         <Octicons name="search" size={24} color="black" />
         <TextInput placeholder='Search....'
         style={{
            fontFamily:'comfortaa-r',
            fontSize:16
         }}/>
      </View>
    </View>
  )
}