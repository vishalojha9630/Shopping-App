import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import appIcons from '../theme/appIcons';
import MainNavigation from './mainNavigation';
import DynamicAppStyles from '../theme/DynamicAppStyles';
import Login from '../screens/auth/login';


const Stack = createStackNavigator();


const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen
        name='MainNavigation'
        component={MainNavigation}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles
        }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles
        }}
      />
    </Stack.Navigator>
  )
}



const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
export default AppNavigation;