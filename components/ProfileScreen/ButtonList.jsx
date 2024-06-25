import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function ButtonList() {

    const buttonList=[
        {
            id:1,
            name:'Share App',
            icon:require('./../../assets/images/share-square.png'),
            path:''
        },
        {
            id:2,
            name:'Logout',
            icon:require('./../../assets/images/sign-out-alt.png'),
            path:''
        }
    ]
  return (
    <View>
        <FlatList
        data={menuList}
        renderItem={({item,index})=>(
            <View>
                <Image source={item.icon}
                style={{
                    width:50,
                    height:50,
                }}
                />
                <Text style={{
                    fontFamily:'comfortaa-r',
                    fontSize:20,
                }}>{item.name}</Text>
            </View>
        )}
        />
    </View>
  )
}