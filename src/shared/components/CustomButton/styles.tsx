import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const useStyles = (
  colors?: any,
  height?: any,
  width?: any,
  spacing?: any,
  bgColor?: any,
  numberOfButtons?: any,
) =>
  StyleSheet.create({
    container: {
      height: height ? height : RF(55),
      width: width ? width : !numberOfButtons ? '100%' : width,
      borderRadius: 50,
      flexGrow: width ? 0 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: spacing,
    },
    leftImg: {
      height: RF(21),
      width: RF(21),
      borderColor: 'green',
      resizeMode: 'contain',
    },
    rightImg: {
      height: RF(15),
      width: RF(15),
      borderColor: 'green',
      resizeMode: 'contain',
    },
  });

export default useStyles;
