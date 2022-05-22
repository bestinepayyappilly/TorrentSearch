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
import { copy, Loading, SearchIllustration } from '@/Assets'
import Clipboard from '@react-native-clipboard/clipboard'
import { Header, Searchbar } from '@/Components'
import ImageContainer from '@/Components/ImageContainer/ImageContainer'

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
      <AnimatedLottieView source={Loading} autoPlay={true} loop />
    </View>
  )
}
// '#2abba7'
// '#18191a'
const Home = () => {
  const [query, setQuery] = useState('')
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState<[] | undefined>(null)
  const copyToClipboard = value => {
    console.log(value)
    Clipboard.setString(value)
    ToastAndroid.show('copied to clipboard', 300)
  }
  let torrents = {}
  // if (data?.length > 0) {
  //   // console.log(data)
  //   let [List] = data?.map(e => e.map(items => items))
  //   // console.log(List.map(e => e.Name))
  //   List.forEach(items => {
  //     const { Name, Size, UploadedBy, Age, Seeders, Leechers, Url } = items
  //     // console.log(Name, Url)
  //     torrents = {
  //       Name,
  //       Url,
  //       Size,
  //       UploadedBy,
  //       Age,
  //       Seeders,
  //       Leechers,
  //     }
  //     console.log(torrents)
  //   })
  // }
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <View style={{ paddingTop: StatusBar.currentHeight + 10, flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <View
          style={{
            flex: 0.2,
            backgroundColor: '#f8f9fa',
            paddingHorizontal: '5%',
          }}
        >
          <Header />
          <Searchbar />
        </View>
        <View
          style={{
            backgroundColor: '#b6c9f3',
            flex: 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ImageContainer
            ImageContainerStyle={{ height: height / 3, width: height / 3 }}
            imageProps={{ resizeMode: 'contain' }}
            imageSrc={SearchIllustration}
            imageStyle={{ height: '100%', width: '100%' }}
          />
          <View
            style={{
              bottom: 10,
              position: 'absolute',
              flexDirection: 'row',

              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                marginHorizontal: '3%',
                backgroundColor: '#000',
                height: 50,
                borderRadius: 5,
                paddingHorizontal: '15%',
              }}
            >
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginHorizontal: '3%',
                backgroundColor: '#000',
                height: 50,
                borderRadius: 5,
                paddingHorizontal: '15%',
              }}
            >
              <Text>hello</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {loader && <Loader />}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
