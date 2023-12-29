import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  TextStyle,
  TextProps,
  View,
  ViewProps,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import useStyles from './styles';
import Text from '../text';

interface Props {
  height?: any;
  width?: any;
  title?: any;
  title2?: any;
  title3?: any;
  leftIcon?: any;
  Icon2?: any;
  Icon3?: any;
  rightIcon?: any;
  paddingVertical?: any;
  paddingHorizontal?: any;
  spacing?: any;
  bgColor?: any;
  numberOfButtons?: any;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  selected?: any;
  justifyContent?: any;
  inactiveColor?: any;
  activeColor?: any;
  activeTextColor?: any;
  inactiveTextColor?: any;
  justifyStyle?: any;
  handlePress: (titleResponse: any) => void;
}

const CustomButton = (props: Partial<Props>) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {
    height,
    Icon2,
    width,
    title,
    title2,
    title3,
    textStyle,
    containerStyle,
    iconStyle,
    leftIcon,
    rightIcon,
    Icon3,
    bgColor,
    spacing,
    paddingVertical,
    paddingHorizontal,
    numberOfButtons,
    justifyContent,
    inactiveColor,
    activeColor,
    selected,
    activeTextColor,
    inactiveTextColor,
    justifyStyle,
    handlePress,
    ...textInputProps
  } = props;
  const styles = useStyles(
    colors,
    height,
    width,
    spacing,
    bgColor,
    numberOfButtons,
  );
  return (
    <View
      style={[
        justifyStyle,
        {
          flexDirection: numberOfButtons ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: justifyContent ? justifyContent : 'space-between',
        },
      ]}>
      <Pressable
        onPress={!numberOfButtons ? handlePress : () => handlePress?.(title)}
        style={[
          styles.container,
          {
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            backgroundColor:
              selected == title
                ? activeColor
                : !numberOfButtons
                ? colors.primary
                : inactiveColor,
          },
          containerStyle,
        ]}
        {...props}>
        {leftIcon && (
          <Image style={[styles.leftImg, iconStyle]} source={leftIcon} />
        )}
        <Text
          style={[
            {...textInputProps},
            textStyle
              ? textStyle
              : {
                  color:
                    selected == title
                      ? activeTextColor
                      : !numberOfButtons
                      ? '#ffff'
                      : inactiveTextColor,
                },
          ]}
          regular
          size={14}>
          {title ? title : 'Button1'}
        </Text>
        {rightIcon && (
          <Image style={[styles.rightImg, iconStyle]} source={rightIcon} />
        )}
      </Pressable>
      {numberOfButtons >= '2' && (
        <Pressable
          onPress={() => handlePress?.(title2)}
          style={[
            styles.container,
            {
              paddingVertical: paddingVertical,
              paddingHorizontal: paddingHorizontal,
              backgroundColor:
                selected === title2 ? activeColor : inactiveColor,
            },
            containerStyle,
          ]}
          {...props}>
          {Icon2 && (
            <Image style={[styles.leftImg, iconStyle]} source={Icon2} />
          )}
          <Text
            style={[
              textStyle,
              {
                color:
                  selected == title2
                    ? activeTextColor
                    : !numberOfButtons
                    ? '#ffff'
                    : inactiveTextColor,
              },
            ]}>
            {title2 ? title2 : 'Button2'}
          </Text>
          {rightIcon && (
            <Image style={[styles.rightImg, iconStyle]} source={rightIcon} />
          )}
        </Pressable>
      )}
      {numberOfButtons >= '3' && (
        <Pressable
          onPress={() => handlePress?.(title3)}
          style={[
            styles.container,
            {
              paddingVertical: paddingVertical,
              paddingHorizontal: paddingHorizontal,
              backgroundColor:
                selected === title3 ? activeColor : inactiveColor,
            },
            containerStyle,
          ]}
          {...props}>
          {Icon3 && (
            <Image style={[styles.leftImg, iconStyle]} source={Icon3} />
          )}
          <Text style={[textStyle]}>{title3 ? title3 : 'Button3'}</Text>
          {rightIcon && (
            <Image style={[styles.rightImg, iconStyle]} source={rightIcon} />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default CustomButton;
