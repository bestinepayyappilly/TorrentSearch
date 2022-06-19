import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import React, { useState } from 'react'
import { SquircleView } from 'react-native-figma-squircle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomSheetModal from './BottomSheetModal'
import BottomSheetModalNotVisible from './BottomSheetModalNotVisible'
const { height, width } = Dimensions.get('screen')

interface BottomSheetProps {
  name: string
  magnetLink: string
  url: string
  onPressClose: () => void
  translateY: Animated.Value
  isVisible: boolean
  setPopup: (value: boolean) => void
}

const BottomSheet: React.FunctionComponent<BottomSheetProps> = ({
  name,
  magnetLink,
  url,
  onPressClose,
  translateY,
  isVisible,
  setPopup,
}) => {
  return (
    <BottomSheetModal
      isVisible={isVisible}
      name={name}
      magnetLink={magnetLink}
      url={url}
      onPressButtonClose={onPressClose}
      setPopup={setPopup}
    />
  )
  // ) : (
  //   <BottomSheetModalNotVisible />
  // )
}

export default BottomSheet

const styles = StyleSheet.create({})
