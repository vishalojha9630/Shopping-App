import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const TabBarIcon = ({ isFocused, route, onPress, icon, title }) => {

  return (
    <View>
      <TouchableOpacity onPress={() => onPress(isFocused, route)}>
        <View style={{ height: 60, width: Dimensions.get('window').width / 3, justifyContent: 'center', }}>
          <View style={{ alignItems: 'center' }}>
            {icon}
            <Text style={{ fontSize: 16, color: '#000', marginVertical: 2 }}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default TabBarIcon;