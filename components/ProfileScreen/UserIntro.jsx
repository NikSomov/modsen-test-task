import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Colors } from '../../constants/Colors';

export default function UserIntro() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={styles.image}
      />
      <Text style={styles.fullName}>
        {user?.fullName}
      </Text>
      <Text style={styles.email}>
        {user?.primaryEmailAddress?.emailAddress}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 99,
  },
  fullName: {
    fontFamily: 'comfortaa-b',
    fontSize: 20,
    color: Colors.PWHITE,
    marginTop: 10,
  },
  email: {
    fontFamily: 'comfortaa-r',
    fontSize: 16,
    color: Colors.PWHITE,
    marginTop: 5,
  },
});
