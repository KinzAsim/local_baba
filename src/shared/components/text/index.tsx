import {
  TextProps,
  StyleProp,
  TextStyle,
  StyleSheet,
  Text as RNText,
} from 'react-native';
import React from 'react';
import {defaultTheme, RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends TextProps {
  regular?: any;
  medium?: any;
  semiBold?: any;
  bold?: any;
  light?: any;
  top?: any;
  size?: any;
  right?: any;
  align?: any;
  color?: any;
  center?: any;
  alignEnd?: any;
  belowLine?: any;
  onPress?: () => void;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}
const Text = (props: Partial<Props>) => {
  const {
    onPress,
    top,
    size,
    right,
    style,
    color,
    align,
    center,
    bold,
    regular,
    medium,
    semiBold,
    light,
    alignEnd,
    numberOfLines,
    belowLine,
  } = props;
  const myTheme = useTheme();

  return (
    <RNText
      {...props}
      onPress={onPress}
      allowFontScaling={false}
      numberOfLines={numberOfLines && numberOfLines}
      style={[
        styles.text,
        bold && styles.bold,
        right && styles.right,
        center && styles.center,
        regular && styles.regular,
        medium && styles.medium,
        semiBold && styles.semiBold,
        light && styles.light,
        alignEnd && {alignSelf: 'flex-end'},
        top && {marginTop: RF(25)},
        size && {fontSize: RF(size)},
        align && {textAlign: 'center'},
        belowLine && {textDecorationLine: 'underline'},
        {color: color ? color : '#000'},
        style,
      ]}>
      {props.children}
    </RNText>
  );
};
export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: RF(13),
    fontFamily: 'Poppins-Regular',
    color: '#32343E',
    marginBottom: -5,
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  regular: {
    fontSize: RF(14),
    fontFamily: 'Poppins-Regular',
    marginBottom: -5,
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  medium_italic: {
    fontFamily: 'SF-Pro-Text-MediumItalic',
  },
  semiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  light: {
    fontFamily: 'Poppins-Light',
  },
});
