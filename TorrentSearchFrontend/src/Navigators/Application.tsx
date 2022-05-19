import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
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

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
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
    </SafeAreaView>
  )
}

export default ApplicationNavigator
