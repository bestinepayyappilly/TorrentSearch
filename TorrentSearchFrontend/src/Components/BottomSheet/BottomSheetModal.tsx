import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native'
import React, { useEffect, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SquircleView } from 'react-native-figma-squircle'
import Clipboard from '@react-native-clipboard/clipboard'

const { height, width } = Dimensions.get('screen')
interface BottomSheetModalProps {
  onPressButtonClose: () => void
  name: string
  magnetLink: string
  url: string
  setPopup: (value: boolean) => void
  isVisible: boolean
}

const BottomSheetModal: React.FunctionComponent<BottomSheetModalProps> = ({
  onPressButtonClose,
  name,
  magnetLink,
  url,
  setPopup,
  isVisible,
}) => {
  const slideUp = useRef(new Animated.Value(height)).current

  useEffect(() => {
    if (isVisible) {
      Slide()
    } else {
      SlideDown()
    }
  }, [isVisible])

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

  const backStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }

  return (
    // <View
    //   style={[
    //     {
    //       height: height,
    //       width: width,
    //     },
    //     !isVisible ? backStyle : null,
    //   ]}
    // >

    <TouchableOpacity
      disabled={!isVisible}
      onPress={() => {
        onPressButtonClose()
        setPopup()
      }}
      style={
        isVisible
          ? [
              //  StyleSheet.absoluteFill,
              {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.1)',
              },
            ]
          : {}
      }
    >
      <Animated.View
        style={{
          bottom: 20,
          position: 'absolute',

          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          transform: [{ translateY: slideUp }],
        }}
      >
        <View
          style={{
            width: width * 0.9,
            height: height / 2,
            backgroundColor: '#fff',
            borderRadius: 20,
            elevation: 10,
            alignItems: 'center',
            paddingTop: '10%',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              marginHorizontal: '8%',
              fontWeight: '700',
              fontSize: 18,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              padding: '1%',
              backgroundColor: '#f5f5f5',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 10,
              marginHorizontal: '8%',
              paddingHorizontal: '2%',
              paddingVertical: '5%',
              marginTop: 20,
            }}
          >
            <Text
              style={{ marginRight: 10, fontWeight: '700' }}
              numberOfLines={5}
            >
              {magnetLink}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setString(magnetLink.toString())
                Alert.alert('Magnet link has been copied')
                // Toast
              }}
            >
              <Ionicons name="copy" color="#696969" size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: '10%',
              flexDirection: 'row',
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Share.share({ message: magnetLink, title: name })
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 12,
                paddingVertical: 12,
                borderRadius: 50,
                backgroundColor: '#2b65f6',
              }}
            >
              <Ionicons name="share" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <SquircleView
            style={{
              height: 50,
              width: width * 0.7,
              position: 'absolute',
              bottom: 20,
              overflow: 'hidden',
            }}
            squircleParams={{
              cornerSmoothing: 0.7,
              cornerRadius: 10,
              fillColor: 'pink',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onPressButtonClose()
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 20,
                  color: 'rgba(0,0,0,0.7)',
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </SquircleView>
        </View>
      </Animated.View>
    </TouchableOpacity>

    // </View>
  )
}

export default BottomSheetModal

const styles = StyleSheet.create({})
