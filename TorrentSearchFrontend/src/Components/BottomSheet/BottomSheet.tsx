import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { SquircleView } from 'react-native-figma-squircle'

const { height, width } = Dimensions.get('screen')

interface BottomSheetProps {
  name: string
  magnetLink: string
  url: string
  onPressClose: () => void
  translateY: Animated.Value
}

const BottomSheet: React.FunctionComponent<BottomSheetProps> = ({
  name,
  magnetLink,
  url,
  onPressClose,
  translateY,
}) => {
  return (
    <Animated.View
      style={{
        bottom: 20,
        position: 'absolute',

        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        transform: [{ translateY }],
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
          justifyContent: 'center',
        }}
      >
        <Text>{name}</Text>
        <Text>{magnetLink}</Text>
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
            onPress={onPressClose}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <Text style={{ fontWeight: '600', fontSize: 20 }}>Close</Text>
          </TouchableOpacity>
        </SquircleView>
      </View>
    </Animated.View>
  )
}

export default BottomSheet

const styles = StyleSheet.create({})
