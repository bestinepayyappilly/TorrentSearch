import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExampleContainer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1f1f1f' }}>
      <StatusBar barStyle={'dark-content'} translucent />
      <Text>ExampleContainer</Text>
    </View>
  )
}

export default ExampleContainer

const styles = StyleSheet.create({})
