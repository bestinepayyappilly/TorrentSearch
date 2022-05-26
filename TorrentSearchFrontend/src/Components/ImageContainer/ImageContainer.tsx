import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import React from 'react'

interface ImageContainerProps {
  ImageContainerStyle: ViewStyle | ViewStyle[]
  imageSrc: ImageSourcePropType
  imageStyle: ImageStyle
  imageProps: ImageProps
}
const ImageContainer: React.FunctionComponent<ImageContainerProps> = ({
  ImageContainerStyle,
  imageSrc,
  imageStyle,
  imageProps,
}) => {
  return (
    <View style={ImageContainerStyle}>
      <Image style={imageStyle} {...imageProps} source={imageSrc} />
    </View>
  )
}

export default ImageContainer

const styles = StyleSheet.create({})
