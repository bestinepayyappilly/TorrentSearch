import React, { useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
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
import { BottomSheet, Header, Searchbar } from '@/Components'
import ImageContainer from '@/Components/ImageContainer/ImageContainer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'

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
      <AnimatedLottieView
        resizeMode="cover"
        source={Loading}
        autoPlay={true}
        style={{ height: height * 0.08 }}
        loop
      />
    </View>
  )
}

let GB = []
let MB = []
let KB = []
const SortSize = (value: string) => {
  if (value.Size.match('GB')) {
    return GB.push(value)
  } else if (value.Size.match('MB')) {
    return MB.push(value)
  } else if (value.Size.match('KB')) {
    return KB.push(value)
  }
}

console.log(GB, MB, KB)

const Home = () => {
  const [query, setQuery] = useState('')
  const [loader, setLoader] = useState<boolean>(false)
  const [data, setData] = useState<[] | undefined>(null)
  const [PageNo, setPageNo] = useState(1)
  const [torrent, setTorrent] = useState({ name: '', magnetLink: '', url: '' })

  const slideUp = useRef(new Animated.Value(height)).current

  const Slide = () => {
    Animated.spring(slideUp, {
      toValue: height * 0.99 - height,
      useNativeDriver: true,
    }).start()
  }
  const SlideDown = () => {
    Animated.spring(slideUp, {
      toValue: height,
      useNativeDriver: true,
    }).start()
  }

  const getData = (query: string, pageNo: number) => {
    setData(null)
    setPageNo(pageNo)
    Keyboard.dismiss()
    setLoader(true)
    console.log(pageNo)
    axios
      .get(
        'https://shielded-harbor-19811.herokuapp.com/api/all/' +
          query +
          '/' +
          pageNo,
      )
      .then(response => {
        const [data] = response.data.map(e => e)
        setData(() => {
          const [list] = response.data.map(e => e)
          return list
        })
        // SortSize(data.map(e => e))

        setLoader(false)
      })
      .catch(e => {
        Alert.alert('Error fetching results')
        setLoader(false)
      })
  }

  // console.log(
  //   data?.map(
  //     e => e.Magnet
  //   ),
  // )

  const magnetData = data?.filter(function (el) {
    if (el.Magnet) {
      return el.Name
    }
  })
  console.log(magnetData)

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
          <Searchbar
            onPress={() => {
              getData(query, 1)
            }}
            onChangeText={text => {
              setQuery(text)
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#b6c9f3',
            flex: 0.8,
            // alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {data?.length > 0 ? (
            <FlatList
              ListFooterComponent={() => {
                return (
                  <View
                    style={{
                      height: 150,
                      backgroundColor: '#b6c9f3',
                      paddingHorizontal: '5%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        getData(query, (pageNo = PageNo - 1))
                      }}
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: '10%',
                      }}
                    >
                      <Ionicons name="arrow-back" size={25} color="#2b65f6" />
                      <Text
                        style={{
                          color: '#2b65f6',
                          fontSize: 16,
                          fontWeight: '600',
                          marginLeft: '3%',
                        }}
                      >
                        Page {PageNo - 1}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        getData(query, (pageNo = PageNo + 1))
                      }}
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: '10%',
                      }}
                    >
                      <Text
                        style={{
                          color: '#2b65f6',
                          fontSize: 16,
                          fontWeight: '600',
                          marginRight: '3%',
                        }}
                      >
                        Page {PageNo + 1}
                      </Text>

                      <Ionicons
                        name="arrow-forward"
                        size={25}
                        color="#2b65f6"
                      />
                    </TouchableOpacity>
                  </View>
                )
              }}
              style={{ height: '100%' }}
              data={data}
              renderItem={items => {
                return (
                  <View
                    style={{
                      paddingVertical: '3%',
                      paddingHorizontal: '3%',
                      // backgroundColor: '#000',
                      marginVertical: '1%',
                      elevation: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        Slide()
                        setTorrent({
                          name: items.item.Name,
                          magnetLink: items.item.Magnet,
                          url: items.item.url,
                        })
                        SortSize(items.item)
                      }}
                      style={{
                        paddingVertical: '5%',
                        backgroundColor: 'rgba(251,251,251,0.5)',
                        borderRadius: 5,
                        paddingHorizontal: '5%',
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text
                          style={{
                            color: '#000',
                            width: '50%',
                            fontWeight: '600',
                            fontSize: 15,
                          }}
                        >
                          {items.item.Name}
                        </Text>
                        <Text
                          style={{
                            color: 'rgba(0,0,0,0.5)',
                            fontWeight: '600',
                            fontSize: 15,
                          }}
                        >
                          Size : {items.item.Size}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: '5%',
                        }}
                      >
                        <Text
                          style={{
                            color: '#000',
                            width: '50%',
                            fontWeight: '600',
                            fontSize: 15,
                          }}
                        >
                          Leechers : {items.item.Leechers}
                        </Text>
                        <Text
                          style={{
                            color: 'rgba(0,0,0,0.5)',
                            fontWeight: '600',
                            fontSize: 15,
                          }}
                        >
                          Seeders : {items.item.Seeders}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          ) : (
            <ImageContainer
              ImageContainerStyle={{
                height: height / 3,
                width: height / 3,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              imageProps={{ resizeMode: 'contain' }}
              imageSrc={SearchIllustration}
              imageStyle={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          )}

          <BottomSheet
            translateY={slideUp}
            name={torrent.name}
            magnetLink={torrent.magnetLink}
            url={torrent.url}
            onPressClose={() => {
              SlideDown()
            }}
          />
        </View>
      </View>
      {loader ? <Loader /> : null}
      {/* <BottomSheet ref={bottomSheetRef}></BottomSheet> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
