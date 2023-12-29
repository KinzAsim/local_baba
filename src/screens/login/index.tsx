import {useTheme} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {LoginContent, Wrapper} from '@components';
import {appLogo2} from '@assets';
import useStyles from './styles';
import React from 'react';

const Login = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <Wrapper>
      <Image source={appLogo2} style={styles.logo} />
      <LoginContent />
    </Wrapper>
  );
};

export default Login;
