import React from 'react'
import { View, Text,  StyleSheet } from 'react-native'
import { Colors } from './../../constants/Colors';
import UserIntro from '../../components/ProfileScreen/UserIntro'
import ButtonList from '../../components/ProfileScreen/ButtonList'

export default function profile() {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      <UserIntro/>
      <ButtonList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
});