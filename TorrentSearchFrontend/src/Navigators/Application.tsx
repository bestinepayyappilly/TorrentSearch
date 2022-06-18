import React, { useEffect } from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { ExampleContainer, StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import Home from '@/Containers/Home'

const Stack = createStackNavigator()

const STATUSBAR_HEIGHT = StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  )

  return (
    <View style={[Layout.fill, { backgroundColor: '#b6c9f3' }]}>
      <MyStatusBar backgroundColor={'#fff'} />
      <View style={[{ backgroundColor: '#fff' }, Layout.fill]}>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                animationEnabled: true,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={ExampleContainer}
              options={{
                animationEnabled: true,
                ...TransitionPresets.ModalPresentationIOS,
              }}
            />
            <Stack.Screen
              name="Dark"
              component={ExampleContainer}
              options={{
                animationEnabled: true,
                ...TransitionPresets.ModalPresentationIOS,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  )
}

export default ApplicationNavigator

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
})
