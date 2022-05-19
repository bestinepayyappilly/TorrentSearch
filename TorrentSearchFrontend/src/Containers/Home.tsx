import React, { useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native'
import axios from 'axios'
import { SquircleView } from 'react-native-figma-squircle'
import AnimatedLottieView from 'lottie-react-native'
import { copy } from '@/Assets'
import Clipboard from '@react-native-clipboard/clipboard'

const { height, width } = Dimensions.get('screen')
const Loader = () => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  )
}
const Home = () => {
  const [query, setQuery] = useState('')
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])
  const copyToClipboard = value => {
    console.log(value)
    Clipboard.setString(value)
    ToastAndroid.show('copied to clipboard', 300)
  }
  console.log(
    'this is the state data',
    data.map(e => e.map(e => e)),
  )
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: StatusBar.currentHeight + 10,
        }}
      >
        <StatusBar translucent backgroundColor={'transparent'} />

        <SquircleView
          style={{
            height: height * 0.07,
            marginTop: '3%',
            elevation: 10,
            marginHorizontal: '3%',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          squircleParams={{
            cornerSmoothing: 0.7,
            cornerRadius: 50,
            fillColor: 'pink',
          }}
        >
          <TextInput
            placeholder="search"
            style={{
              borderWidth: 3,
              borderRadius: 50,
              paddingHorizontal: '5%',
              borderColor: 'rgba(0,0,0,0.1)',
              fontWeight: '700',
              fontSize: 20,
              flex: 1,
              marginRight: '2%',
            }}
            onChangeText={text => {
              setQuery(text)
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setLoader(true)
              axios
                .get(
                  'https://shielded-harbor-19811.herokuapp.com/api/all/' +
                    query,
                )
                .then(value => {
                  // console.log(value.data.map(e => e.map(e => e.Name)))
                  setData(value.data.map(e => e))
                  setLoader(false)
                })
                .catch(e => console.log(e))
            }}
            style={{
              flex: 0.2,
              borderRadius: 50,
              backgroundColor: 'rgba(251,251,251,0.5)',
            }}
          ></TouchableOpacity>
        </SquircleView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '5%',
          }}
        >
          {[1, 2, 3].map(e => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: '#CDF5F6',
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: 'rgba(0,0,0,0.1)',
                }}
              ></TouchableOpacity>
            )
          })}
        </View>
        <View style={{ marginTop: '2%' }}>
          <SquircleView
            style={{
              // height: height * 0.6,
              flexGrow: 1,

              marginVertical: '5%',
              elevation: 10,
              marginHorizontal: '3%',
              justifyContent: 'center',
              paddingHorizontal: '5%',
              paddingVertical: '3%',
            }}
            squircleParams={{
              cornerSmoothing: 0.7,
              cornerRadius: 30,
              fillColor: 'pink',
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {data.map(items =>
                items.map(e => {
                  return (
                    <View key={e.Url} style={{ marginVertical: '3%' }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Text style={{ color: '#000', fontWeight: '700' }}>
                          {e.Name}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            copyToClipboard(e.Magnet)
                          }}
                        >
                          <AnimatedLottieView
                            source={copy}
                            style={{ height: 40, width: 40 }}
                            autoPlay={true}
                            loop={true}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: '5%',
                        }}
                      >
                        <Text style={{ color: '#000', fontWeight: '700' }}>
                          Leechers: {e.Leechers}
                        </Text>
                        <Text style={{ color: '#000', fontWeight: '700' }}>
                          Size: {e.Size}
                        </Text>
                        <Text style={{ color: '#000', fontWeight: '700' }}>
                          Seeders: {e.Seeders}
                        </Text>
                      </View>
                    </View>
                  )
                }),
              )}
            </ScrollView>
          </SquircleView>
        </View>
      </View>
      {loader && <Loader />}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
