import React from 'react'
import { View } from 'react-native';
import DrawerCustomItemList from './drawerCustomItemList';
import { DrawerContentScrollView } from '@react-navigation/drawer';


const DrawerContent = ({ props, appIcons }) => {


  function navigateTo(toScreen) {
    props.navigation.navigate(toScreen);
  }

  const darwerItemList = [
    {
      id: 0,
      screenName: 'HomeScreen',
      text: 'Home',
      // Icon: appIcons.SvgIcon.HomeIcon,
      functionCall: navigateTo,
    },
    {
      id: 1,
      screenName: 'ProfileScreen',
      text: 'Categories',
      // Icon: appIcons.SvgIcon.ProfileIcon,
      functionCall: navigateTo,
    },
    {
      id: 2,
      screenName: 'SettingsScreen',
      text: 'Cart',
      // Icon: appIcons.SvgIcon.SettingsIcon,
      functionCall: navigateTo,
    },
  ];


  return (
    <View style={{ flex: 1, paddingHorizontal: 20, }}>
      <DrawerContentScrollView {...props}>
        <DrawerCustomItemList
          darwerItemList={darwerItemList}
          style={{}}
        />
      </DrawerContentScrollView>
    </View>
  )
}
export default DrawerContent;