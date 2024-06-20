import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{
      backgroundColor:'#010101', 
    }}>
      <View style={{
        display:'flex',
        alignItems:'center',
        marginTop:1,
        
      }}>

      <Image source={require('./../assets/images/3d-img1.png')}
      style={{
        width:400,
        height:600,

      }}/>
      
      
      </View>

      <View style={{
        backgroundColor:'#010101', 
        padding:20}}>
        <Text style={{
          color:Colors.PRIMARY,
          fontSize:30,
          fontFamily:'comfortaa-b',
          textAlign:'center'
        }}>
          Your Ultimate Acces to Books
          </Text>
          <TouchableOpacity style={styles.btn}
          onPress={onPress}
          >
            <Text style={{
              textAlign:'center',
              color:'#010101',
              fontFamily:'comfortaa-b'
            }
            }>
              Get Started
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    backgroundColor:Colors.PRIMARY,
    padding:20,
    borderRadius:99,
    marginTop:40
  }
})