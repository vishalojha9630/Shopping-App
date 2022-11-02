import {Dimensions} from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const lightColorSet = {
  themeBackgroundColor: '#FFFFFF',
  mainTitleColor: '#000000',
  mainTextColor: '#1F1F1F',
};

const _colorSet = {
  light: lightColorSet,
};
const navLight = {
  backgroundColor: '#FFFFFF',
  fontColor: '#1F1F1F',
  headerStyleColor: '#E8E8E8',
  iconBackground: '#F4F4F4',
};

const navDark = {
  backgroundColor: '#3D3D3D',
};

const navThemeConstants = {
  light: navLight,
  dark: navDark,
  'no-preference': navLight,
  main: '#4991ec',
};

const DynamicAppStyles = {
  navThemeConstants: navThemeConstants,
  colorSet: _colorSet,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
};

export default DynamicAppStyles;
