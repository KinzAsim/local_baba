import {
  View,
  TextInput,
  Image,
  TextInputProps,
  Pressable,
  PressableProps,
} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {useTheme} from '@react-navigation/native';
import Text from '../text';
import {margin, RF} from '@theme';

interface Props extends PressableProps {
  icon?: any;
  height?: any;
  placeHolder?: any;
  title?: any;
  containerStyle?: any;
  borderColor?: any;
}
const InputField = (props: Props & TextInputProps) => {
  const {
    icon,
    height,
    placeHolder,
    title,
    containerStyle,
    borderColor,
    ...textInputProps
  } = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors, height, icon, borderColor);

  return (
    <View style={containerStyle}>
      {title && (
        <Text style={margin.bottom_8} color={colors.darkText}>
          {title}
        </Text>
      )}
      <View style={[styles.container]}>
        <TextInput
          {...textInputProps}
          style={styles.input}
          placeholder={placeHolder ? placeHolder : 'Search'}
        />
        {icon && (
          <Pressable {...props} style={styles.flexEnd}>
            <Image source={icon} style={styles.icon} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default InputField;
