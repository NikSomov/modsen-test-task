import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Colors } from '../../constants/Colors';
export default function UserIntro() {
    const {user}=useUser();
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    }}>
        <Image source={{uri:user?.imageUrl}}
        style={{
            width:100,
            height:100,
            borderRadius:99,
        }}/>

        <Text style={{
            fontFamily:'comfortaa-b',
            fontSize:20,
            color:Colors.PWHITE}}>
            {user?.fullName}
            
        </Text>

        <Text style={{
            fontFamily:'comfortaa-r',
            fontSize:16,
            color:Colors.PWHITE}}>
            {user?.primaryEmailAddress?.emailAddress}
        </Text>
    </View>
  )
}