import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './drawerNavigator';
import { Cart } from '../screens';
import ProductSingle from '../screens/listing/productSingle';
import CategorySingle from '../screens/listing/categorySingle';


const Stack = createStackNavigator();
const doNotShowHeaderOption = {
  headerShown: false,
};

const MainNavigation = (props) => {

  const appIcons = props.route.params.appIcons;
  const DynamicAppStyles = props.route.params.DynamicAppStyles;


  return (
    <Stack.Navigator
      // initialRouteName='DrawerNavigator'
      screenOptions={{
        headerTitleStyle: {
          color: '#1F1F1F',
          fontSize: 18,
        },
        headerTintColor: '#1F1F1F',
      }}>
      <Stack.Screen
        name='DrawerNavigator'
        options={doNotShowHeaderOption}
        component={DrawerNavigator}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles
        }}
      />


      <Stack.Screen
        options={{
          title: 'Product Detail',
          headerTitleAlign: 'center',
        }}
        name='ProductSingle'
        component={ProductSingle}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles
        }}
      />
      <Stack.Screen
        options={{
          title: 'Category Detail',
          headerTitleAlign: 'center',
        }}
        name='CategorySingle'
        component={CategorySingle}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles
        }}
      />
      <Stack.Screen
        options={{
          title: 'Cart',
          headerTitleAlign: 'center',
        }}
        name='Cart'
        component={Cart}
        initialParams={{
          appIcons: appIcons,
          DynamicAppStyles: DynamicAppStyles
        }}
      />

    </Stack.Navigator>
  )
}
export default MainNavigation

