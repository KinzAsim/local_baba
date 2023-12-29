import {StyleSheet} from 'react-native';
import {WP, HP, RF} from '@theme';
const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      paddingTop: RF(80),
      backgroundColor: '#fff',
      padding: RF(24),
      flex: 1,
    },
    logo: {height: RF(38), width: RF(225), resizeMode: 'contain'},
  });

export default useStyles;
