import React from 'react';
import { FlatList, View, } from 'react-native';
import TabBarIcon from './tabBarIcons';


const TabBar = ({
  state,
  appIcons,
  navigation,
}) => {

  const tabIconsList = [
    {
      id: 0,
      name: '',
      focusedIcon: <appIcons.SvgIcon.CategoryIcon height={28} width={28} />,
      notFocusedICon: <appIcons.SvgIcon.CategoryIcon height={28} width={28} />,
      label: 'Categories',
      route: state.routes[0],
      isFocused: state.index === 0,
    },
    {
      id: 1,
      name: '',
      focusedIcon: <appIcons.SvgIcon.HomeIcon height={28} width={28} />,
      notFocusedICon: <appIcons.SvgIcon.HomeIcon height={28} width={28} />,
      label: 'Home',
      route: state.routes[1],
      isFocused: state.index === 1,
    },
    {
      id: 2,
      name: '',
      focusedIcon: <appIcons.SvgIcon.CartIcon height={28} width={28} />,
      notFocusedICon: <appIcons.SvgIcon.CartIcon height={28} width={28} />,
      label: 'Cart',
      route: state.routes[2],
      isFocused: state.index === 2,
    },
  ];

  const onPress = (isFocused, route) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true });
    }
  };


  const renderItem = ({ item }) => (
    <TabBarIcon
      isFocused={item.isFocused}
      onPress={onPress}
      title={item.label}
      route={item.route}
      icon={item.isFocused ? item.focusedIcon : item.notFocusedICon}
    />
  );

  return (
    <View>
      <FlatList
        data={tabIconsList}
        bounces={false}
        style={{ borderTopWidth: 2, borderColor: '#4e85de', }}
        horizontal
        renderItem={renderItem}
      // keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}


export default TabBar