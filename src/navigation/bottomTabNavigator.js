import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Cart, Categories, Home } from '../screens'
import TabBar from '../core/tabBar/tabBar';


const Tabs = createBottomTabNavigator();
const doNotShowHeaderOption = {
  headerShown: false,
};


function BottomTabNavigator(props) {
  const appIcons = props.route.params.appIcons;
  const DynamicAppStyles = props.route.params.DynamicAppStyles;


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#bfbfbf' />
      <Tabs.Navigator
        tabBar={props => (
          <TabBar
            {...props}
            appIcons={appIcons}
            DynamicAppStyles={DynamicAppStyles}
          />
        )}
        initialRouteName={'Home'}
        screenOptions={{
          showLabel: true,
        }}
      >

        <Tabs.Screen
          name='Categories'
          component={Categories}
          options={doNotShowHeaderOption}
          initialParams={{
            appIcons: appIcons,
            DynamicAppStyles: DynamicAppStyles

          }}
        />

        <Tabs.Screen
          name='Home'
          component={Home}
          options={doNotShowHeaderOption}
          initialParams={{
            appIcons: appIcons,
            DynamicAppStyles: DynamicAppStyles

          }}
        />

        <Tabs.Screen
          name='Cart'
          component={Cart}
          options={doNotShowHeaderOption}
          initialParams={{
            appIcons: appIcons,
            DynamicAppStyles: DynamicAppStyles

          }}
        />

      </Tabs.Navigator>
    </SafeAreaView>
  )
}
export default BottomTabNavigator