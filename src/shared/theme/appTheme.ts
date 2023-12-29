import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {RF} from './responsive';
const {width, height} = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;

// ....................Global-Colors........................

export const mixGray = '#595959';
export const primary = '#FE4101';
export const textColor3 = '#DDDDDD';
// ....................UseTheme........................

export const darkThemeStyle = {
  primary: '#FE4101',
  lightText: '#646982',
  darkText: '#32343E',
  darkBlue: '#242B47',
  black: '#000000',
  theme: '#FFFFFF',
  gray: '#808080',
  textColor: '#434343',
  textColor2: '#949494',
  textColor3: '#DDDDDD',
  mixGray: '#595959',
  dimGray: '#7E8A97',
  lightGray: '#A0A5BA',
  thinGray: '#F8F8F8',
  extraLightGray: '#E5E5E5',
};

export const defaultTheme = {
  colors: {
    primary: '#FE4101',
    lightText: '#646982',
    darkText: '#32343E',
    darkBlue: '#242B47',
    black: '#000000',
    theme: '#FFFFFF',
    gray: '#808080',
    textColor: '#434343',
    textColor2: '#949494',
    textColor3: '#DDDDDD',
    mixGray: '#595959',
    dimGray: '#7E8A97',
    lightGray: '#A0A5BA',
    thinGray: '#F8F8F8',
    extraLightGray: '#E5E5E5',
  },
};

// ....................Global-Styles........................

export const globalStyles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowSimple: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnstart: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  screenWidth: {width: SCREEN_WIDTH},
  Width_100: {width: '100%'},
  errors: {color: 'red', marginTop: RF(4)},
});
export const margin = StyleSheet.create({
  allSides_24: {
    margin: RF(24),
  },
  Vertical_2: {
    marginVertical: RF(2),
  },
  Vertical_4: {
    marginVertical: RF(4),
  },
  Vertical_8: {
    marginVertical: RF(8),
  },
  Vertical_16: {
    marginVertical: RF(16),
  },
  Vertical_24: {
    marginVertical: RF(24),
  },
  Horizontal_2: {
    marginHorizontal: RF(2),
  },
  Horizontal_4: {
    marginHorizontal: RF(4),
  },
  Horizontal_8: {
    marginHorizontal: RF(8),
  },
  Horizontal_16: {
    marginHorizontal: RF(16),
  },
  Horizontal_24: {
    marginHorizontal: RF(24),
  },
  top_2: {
    marginTop: RF(2),
  },
  top_4: {
    marginTop: RF(4),
  },
  top_8: {
    marginTop: RF(8),
  },
  top_16: {
    marginTop: RF(16),
  },
  top_18: {
    marginTop: RF(18),
  },
  top_24: {
    marginTop: RF(24),
  },
  top_32: {
    marginTop: RF(32),
  },
  top_34: {
    marginTop: RF(34),
  },
  top_36: {
    marginTop: RF(36),
  },
  top_38: {
    marginTop: RF(38),
  },
  top_40: {
    marginTop: RF(40),
  },
  top_64: {
    marginTop: RF(64),
  },
  left_2: {
    marginLeft: RF(2),
  },
  left_4: {
    marginLeft: RF(4),
  },
  left_8: {
    marginLeft: RF(8),
  },
  left_16: {
    marginLeft: RF(16),
  },
  left_24: {
    marginLeft: RF(24),
  },
  left_32: {
    marginLeft: RF(32),
  },
  left_40: {
    marginLeft: RF(40),
  },
  right_2: {
    marginRight: RF(2),
  },
  right_4: {
    marginRight: RF(4),
  },
  right_8: {
    marginRight: RF(8),
  },
  right_16: {
    marginRight: RF(16),
  },
  right_24: {
    marginRight: RF(24),
  },
  bottom_2: {
    marginBottom: RF(2),
  },
  bottom_4: {
    marginBottom: RF(4),
  },
  bottom_8: {
    marginBottom: RF(8),
  },
  bottom_16: {
    marginBottom: RF(16),
  },
  bottom_24: {
    marginBottom: RF(24),
  },
});
export const padding = StyleSheet.create({
  Vertical_2: {
    paddingVertical: RF(2),
  },
  Vertical_4: {
    paddingVertical: RF(4),
  },
  Vertical_8: {
    paddingVertical: RF(8),
  },
  Vertical_16: {
    paddingVertical: RF(16),
  },
  Vertical_24: {
    paddingVertical: RF(24),
  },
  Vertical_32: {
    paddingVertical: RF(32),
  },
  Horizontal_2: {
    paddingHorizontal: RF(2),
  },
  Horizontal_4: {
    paddingHorizontal: RF(4),
  },
  Horizontal_8: {
    paddingHorizontal: RF(8),
  },
  Horizontal_16: {
    paddingHorizontal: RF(16),
  },
  Horizontal_24: {
    paddingHorizontal: RF(24),
  },
  top_2: {
    paddingTop: RF(2),
  },
  top_4: {
    paddingTop: RF(4),
  },
  top_8: {
    paddingTop: RF(8),
  },
  top_16: {
    paddingTop: RF(16),
  },
  top_24: {
    marginTop: RF(24),
  },
  left_2: {
    paddingLeft: RF(2),
  },
  left_4: {
    paddingLeft: RF(4),
  },
  left_8: {
    paddingLeft: RF(8),
  },
  left_16: {
    paddingLeft: RF(16),
  },
  left_24: {
    paddingLeft: RF(24),
  },
  right_2: {
    paddingRight: RF(2),
  },
  right_4: {
    paddingRight: RF(4),
  },
  right_8: {
    paddingRight: RF(8),
  },
  right_16: {
    paddingRight: RF(16),
  },
  right_24: {
    paddingRight: RF(24),
  },
  bottom_2: {
    paddingBottom: RF(2),
  },
  bottom_4: {
    paddingBottom: RF(4),
  },
  bottom_8: {
    paddingBottom: RF(8),
  },
  bottom_16: {
    paddingBottom: RF(16),
  },
  bottom_24: {
    paddingBottom: RF(24),
  },
  bottom_32: {
    paddingBottom: RF(32),
  },
  bottom_40: {
    paddingBottom: RF(40),
  },
});

export const widthPercent = StyleSheet.create({
  full: {
    width: '100%',
  },
  half: {
    width: '50%',
  },
  partial: {
    width: '33%',
  },
});

// ....................Icon-Styles........................

export const icon = StyleSheet.create({
  size_12: {
    height: RF(12),
    width: RF(12),
    resizeMode: 'contain',
  },
  size_14: {
    height: RF(14),
    width: RF(14),
    resizeMode: 'contain',
  },
  size_16: {
    height: RF(16),
    width: RF(16),
    resizeMode: 'contain',
  },
  size_18: {
    width: RF(18),
    height: RF(18),
    resizeMode: 'contain',
  },
  size_20: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
  size_22: {
    width: RF(22),
    height: RF(22),
    resizeMode: 'contain',
  },
  size_24: {
    width: RF(24),
    height: RF(24),
    resizeMode: 'contain',
  },
  size_26: {
    width: RF(26),
    height: RF(26),
    resizeMode: 'contain',
  },
  size_28: {
    width: RF(28),
    height: RF(28),
    resizeMode: 'contain',
  },
  size_30: {
    width: RF(30),
    height: RF(30),
    resizeMode: 'contain',
  },
  size_32: {
    width: RF(32),
    height: RF(32),
    resizeMode: 'contain',
  },
  size_34: {
    width: RF(34),
    height: RF(34),
    resizeMode: 'contain',
  },
  size_36: {
    width: RF(36),
    height: RF(36),
    resizeMode: 'contain',
  },
  size_38: {
    width: RF(38),
    height: RF(38),
    resizeMode: 'contain',
  },
  size_40: {
    width: RF(40),
    height: RF(40),
    resizeMode: 'contain',
  },
});
