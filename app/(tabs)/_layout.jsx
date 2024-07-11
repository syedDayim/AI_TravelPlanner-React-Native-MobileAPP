import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors"
const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
    }}>

        <Tabs.Screen name='MyTrip' options={{
            tabBarIcon: ({ color }) => <Ionicons name="paper-plane" size={24} color={ color } />
        }}/>

        <Tabs.Screen name='Discover' options={{
            tabBarIcon: ({ color })=><Ionicons name="earth" size={24} color={ color } />

        }}/>

        <Tabs.Screen name='Profile' options={{
            tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={ color } />
        }}/>
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})