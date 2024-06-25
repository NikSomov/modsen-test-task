import { View, Text } from 'react-native'
import React from 'react'
import UserIntro from '../../components/ProfileScreen/UserIntro'
import ButtonList from '../../components/ProfileScreen/ButtonList'

export default function profile() {
  return (
    <View>
      <Text>profile</Text>
      <UserIntro/>
      <ButtonList/>
    </View>
  )
}