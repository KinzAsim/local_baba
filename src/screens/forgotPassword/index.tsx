import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  CustomButton,
  CustomModal,
  Icon,
  InputField,
  Text,
  Wrapper,
} from '@components';
import {globalStyles, icon, margin} from '@theme';
import {close, email} from '@assets';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';
import {useModal} from '@utils';

const ForgotPassword = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {openModal, closeModal} = useModal();
  return (
    <Wrapper>
      <Pressable
        onPress={() => navigation.goBack()}
        style={globalStyles.flexEnd}>
        <Icon iconStyle={[icon.size_32]} source={close} />
      </Pressable>
      <Text size={24} color={colors.textColor} bold>
        Forgot Password?
      </Text>
      <Text regular color={colors.textColor2} bold>
        Enter your registered email to get verification email
      </Text>
      <InputField
        placeHolder={'example@gmail.com'}
        borderColor={colors.primary}
        icon={email}
        cursorColor={colors.primary}
        containerStyle={margin.top_24}
      />
      <CustomButton
        handlePress={openModal}
        title={'Send Email'}
        containerStyle={margin.top_40}
      />
      <CustomModal>
        <Text onPress={closeModal}> ssssssssssssss</Text>
      </CustomModal>
    </Wrapper>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
