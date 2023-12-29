import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  source?: any;
  iconStyle?: any;
}

const Icon = (props: Props) => {
  const {source, iconStyle} = props;
  return <Image style={iconStyle} source={source} />;
};

export default Icon;

const styles = StyleSheet.create({});
