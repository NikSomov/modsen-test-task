import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Handle other cases
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('./../assets/images/3d-img1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Your Ultimate Access to Books
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 1,
  },
  image: {
    width: 400,
    height: 600,
  },
  contentContainer: {
    backgroundColor: '#010101',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 30,
    fontFamily: 'comfortaa-b',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 99,
    marginTop: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: '#010101',
    fontFamily: 'comfortaa-b',
  },
});
