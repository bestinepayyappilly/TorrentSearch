import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { navigationRef } from '@/Navigators/utils'
// import axios from 'axios'
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <StatusBar translucent backgroundColor={'transparent'} />
      <View
        style={{
          backgroundColor: '#0071e3',
          //   borderBottomLeftRadius: 20,
          //   borderBottomRightRadius: 20,

          borderRadius: 10,
          marginHorizontal: '5%',
        }}
      >
        <View style={{ padding: '5%' }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            Search
          </Text>
          <TextInput style={{ borderWidth: 2, borderRadius: 8, padding: 5 }} />
        </View>
      </View>

      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigationRef.navigate('Settings')
        }}
        style={{
          backgroundColor: 'blue',
          paddingVertical: 20,
          marginHorizontal: 30,
          borderRadius: 8,
          // position: 'absolute',
          top: 10,
        }}
      >
        <View style={{ height: 30 }}></View>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
