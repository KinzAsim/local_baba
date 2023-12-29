import {Image, StyleSheet, View, Linking} from 'react-native';
import React from 'react';
import {CustomButton, Text, Wrapper} from '@components';
import {checkInbox} from '@assets';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';

const CheckInbox = ({route}: any) => {
  const {params} = route;
  const emailValue = params ? params : '@Someone@gmail.com';
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Wrapper>
      <Image source={checkInbox} style={styles.image} />
      <Text size={24} color={colors.textColor} bold style={margin.top_38}>
        Check Inbox!
      </Text>
      <Text regular color={colors.textColor2} bold>
        We have sent you a verification email to your email address,
      </Text>
      <Text regular color={colors.textColor2} bold>
        {emailValue}
      </Text>
      <CustomButton title={'Open inbox'} containerStyle={margin.top_40} />
    </Wrapper>
  );
};

export default CheckInbox;

const styles = StyleSheet.create({
  image: {
    height: RF(182),
    width: RF(188),
    alignSelf: 'center',
  },
});
