import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import Wrapper from '../wrapper';
import {useTheme} from '@react-navigation/native';
import {pattern} from '@assets';
import {RF} from '@theme';

interface Props {
  children?: any;
}

const ImageWrapper = (props: Props) => {
  const {children} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Wrapper
      statusBarStyle={'light-content'}
      translucent
      statusBarBagColor={'transparent'}
      bgClr={colors.theme}>
      <Image source={pattern} style={styles.headImg} />
      {children}
    </Wrapper>
  );
};

export default ImageWrapper;

const styles = StyleSheet.create({
  headImg: {
    height: RF(180),
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
  },
});
