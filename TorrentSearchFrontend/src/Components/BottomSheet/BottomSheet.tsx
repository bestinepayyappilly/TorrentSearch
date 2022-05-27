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
import Ionicons from 'react-native-vector-icons/Ionicons'
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
          paddingTop: '10%',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: '5%',
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
          }}
        >
          <Text
            style={{ marginRight: 10, fontWeight: '700' }}
            numberOfLines={5}
          >
            {magnetLink}
          </Text>
          <TouchableOpacity>
            <Ionicons name="copy" color="#696969" size={20} />
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
