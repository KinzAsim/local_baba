import {StyleSheet} from 'react-native';
import {WP, HP, RF} from '@theme';
const useStyles = (colors: any, height: any, icon: any, borderColor: any) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      flexGrow: 1,
      borderRadius: RF(12),
      height: height ? height : RF(55),
      borderColor: borderColor ? borderColor : colors.extraLightGray,
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: RF(20),
      alignItems: 'center',
    },
    input: {
      backgroundColor: 'transparent',
      width: icon ? '90%' : '100%',
      padding: 0,
    },
    icon: {height: RF(14), width: RF(14), resizeMode: 'contain'},
    flexEnd: {
      flexGrow: 1,
      alignItems: 'flex-end',
    },
  });

export default useStyles;
