import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './bottomTabNavigator';
import drawerContent from '../core/drawerContent/drawerContent'


const Drawer = createDrawerNavigator();
const doNotShowHeaderOption = {
  headerShown: false,
};

const DrawerNavigator = (props) => {
  const appIcons = props.route.params.appIcons

  return (
    <Drawer.Navigator
      initialRouteName="BottomTabNavigator"
      drawerContent={props => drawerContent({ props: props, appIcons: appIcons })}
      screenOptions={{
        drawerStyle: { borderBottomRightRadius: 20, borderTopRightRadius: 20 },
      }}>

      <Drawer.Screen
        name="Menu"
        component={BottomTabNavigator}
        initialParams={{
          appIcons: appIcons,
        }}
        options={doNotShowHeaderOption}
      />
    </Drawer.Navigator>
  )
}
export default DrawerNavigator