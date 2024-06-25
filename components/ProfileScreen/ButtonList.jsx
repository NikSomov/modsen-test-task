import { View, Text, Image, FlatList, Share, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function ButtonList() {
    const {signOut}=useAuth();
    const buttonList=[
        {
            id:1,
            name:'Share App',
            icon:require('./../../assets/images/share-square.png'),
            path:'share'
        },
        {
            id:2,
            name:'Logout',
            icon:require('./../../assets/images/sign-out-alt.png'),
            path:'logout'
        }
    ]
    const router=useRouter();

    const onMenuClick=(item)=>{
        if(item.path=='logout'){
            signOut();
            return;
        }
        if(item.path=='share'){
            Share.share({
                message:'Download the Book Search App'
            })
            return;
        }
        router.push(item.path)
    }


  return (
    <View style={{
        marginTop:20
    }}>
        <FlatList
        data={buttonList}
        numColumns={2}
        renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>onMenuClick(item)}
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:10,
                flex:1,
                padding:10,

                margin:20,
                backgroundColor:Colors.PWHITE

            }}>
                <Image source={item.icon}
                style={{
                    width:30,
                    height:30,
                }}
                />
                <Text style={{
                    fontFamily:'comfortaa-r',
                    fontSize:16,
                    flex:1,
                }}>{item.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}