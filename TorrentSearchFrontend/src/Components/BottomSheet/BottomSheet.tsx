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
import BottomSheetModal from './BottomSheetModal'
const { height, width } = Dimensions.get('screen')

interface BottomSheetProps {
  name: string
  magnetLink: string
  url: string
  onPressClose: () => void
  translateY: Animated.Value
  isVisible: boolean
}

const BottomSheet: React.FunctionComponent<BottomSheetProps> = ({
  name,
  magnetLink,
  url,
  onPressClose,
  translateY,
  isVisible,
}) => {
  return isVisible ? (
    <BottomSheetModal
      name={name}
      magnetLink={magnetLink}
      url={url}
      onPressButtonClose={onPressClose}
    />
  ) : null
}

export default BottomSheet

const styles = StyleSheet.create({})
