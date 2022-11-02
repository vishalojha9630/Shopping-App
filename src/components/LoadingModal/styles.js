
import { StyleSheet } from 'react-native';

const dynamicStyles = (colorScheme, DynamicAppStyles) => {
  return StyleSheet.create({

    modalBackground: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)'
    },
    activityIndicatorWrapper: {
      height: 100,
      width: 100,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: DynamicAppStyles.colorSet[colorScheme].themeBackgroundColor,
      justifyContent: 'center',
    },
    title: {
      paddingTop: 8,
    },
  }
  );
};

export default dynamicStyles;
