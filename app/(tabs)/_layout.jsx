import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Octicons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors'

const styles = StyleSheet.create({
    tabBarBackground: {
      backgroundColor: Colors.BLACK,
      borderTopWidth: 0, 

    },
    tabBarLabel: {
      fontSize: 12,
      color: Colors.PRIMARY,

    },
    tabBarIcon: {
      marginBottom: -3,
    },
  });

  export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarBackground,
          activeTintColor: Colors.PRIMARY,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} style={styles.tabBarIcon} />,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color }) => <Octicons name="bookmark" size={24} color={color} style={styles.tabBarIcon} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <Octicons name="person" size={24} color={color} style={styles.tabBarIcon} />,
          }}
        />
      </Tabs>
    );
  }