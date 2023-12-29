import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      padding: RF(24),
      alignItems: 'center',
      borderRadius: 24,
    },
    roundView: {
      height: RF(86),
      width: RF(86),
      borderRadius: 50,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default useStyles;
