import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Octicons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors'
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY

    }}>
        <Tabs.Screen name = "home"
        options={{
            tabBarLabel:'Home',
            tabBarIcon:({color})=><Octicons name="home" 
            size={24} color={color} />
        }}/>
        <Tabs.Screen name = "explore"
        options={{
            tabBarLabel:'Explore',
            tabBarIcon:({color})=><Octicons name="search" 
            size={24} color={color} />
        }}/>
        <Tabs.Screen name = "library"
        options={{
            tabBarLabel:'Library',
            tabBarIcon:({color})=><Octicons name="bookmark" 
            size={24} color={color} />
        }}/>
    </Tabs>
  )
}