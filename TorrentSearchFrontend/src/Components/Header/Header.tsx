import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { navigationRef } from '@/Navigators/utils'

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text style={{ color: '#000', fontSize: 40, fontWeight: '700' }}>
        Search
      </Text>
      <TouchableOpacity
        onPress={() => navigationRef.navigate('Settings')}
        style={{
          height: 40,
          width: 40,
          backgroundColor: '#cccdd0',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="ios-settings" size={25} color="#80807f" />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
