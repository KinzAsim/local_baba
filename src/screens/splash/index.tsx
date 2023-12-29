import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ImageWrapper, Wrapper} from '@components';
import {appLogo} from '@assets';
import {RF} from '@theme';

const Splash = () => {
  return (
    <ImageWrapper>
      <View style={styles.container}>
        <Image source={appLogo} style={styles.logo} />
      </View>
    </ImageWrapper>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {height: RF(55), width: '100%', resizeMode: 'contain'},
});
