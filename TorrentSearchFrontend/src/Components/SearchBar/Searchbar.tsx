import {
  Image,
  RefreshControlProps,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface SearchbarProps {
  onChangeText: (text: string) => void
  onPress: () => void
}

const Searchbar: React.FunctionComponent<SearchbarProps> = ({
  onChangeText,
  onPress,
}) => {
  return (
    <View
      style={{
        marginTop: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TextInput
        onChangeText={onChangeText}
        // ref={() => ref}
        style={{
          backgroundColor: '#cccdd0',
          borderRadius: 8,
          padding: '3%',
          paddingHorizontal: '5%',
          color: '#000',
          flex: 1,
          marginRight: '3%',
          minHeight: 50,
        }}
        selectionColor="#000"
        placeholder="Search"
      />
      <TouchableOpacity
        onPress={() => {
          onPress()
        }}
        style={{
          backgroundColor: '#2b65f6',
          padding: '3%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 50,
        }}
      >
        <Ionicons name="ios-search-sharp" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({})
