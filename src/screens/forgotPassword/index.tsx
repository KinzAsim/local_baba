import {Pressable, StyleSheet, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {
  CustomButton,
  CustomModal,
  Icon,
  InputField,
  Text,
  Wrapper,
} from '@components';
import {globalStyles, icon, margin, RF} from '@theme';
import {close, email, whiteEmail} from '@assets';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';
import {FogotPassworSchema, useModal} from '@utils';
import useStyles from './styles';
import {
  forgotEmail_props,
  modalButton_props,
  sendEmail_props,
} from './forgotProps';
import {useFormik} from 'formik';

const ForgotPassword = ({navigation}: any) => {
  const [selected, setSelected] = useState('Confirm');

  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const {openModal, closeModal} = useModal();

  const onPress = (title: any) => {
    setSelected(title);
    setTimeout(() => {
      (title == 'Confirm' && navigate('CheckInbox', formik.values.email)) ||
        closeModal();
    }, 200);
  };

  const handleFormik = () => {
    formik.handleSubmit();
  };

  const handleModal = (values: any) => {
    openModal();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: FogotPassworSchema,
    onSubmit: (values: any) => {
      handleModal(values);
    },
  });

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
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        {...forgotEmail_props}
      />
      {formik.touched.email && formik.errors.email && (
        <Text style={globalStyles.errors}>{formik.errors.email}</Text>
      )}
      <CustomButton {...sendEmail_props} handlePress={handleFormik} />
      <CustomModal>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.roundView}>
              <Icon source={whiteEmail} iconStyle={icon.size_40} />
            </View>
            <Text
              size={20}
              color={colors.textColor}
              semiBold
              style={margin.top_24}>
              Confirm Email!
            </Text>
            <Text regular color={colors.textColor2} style={margin.top_4}>
              A Verification Email Will Be Sent To Your Email{' '}
              <Text color={colors.textColor} regular>
                {formik.values.email}
              </Text>
            </Text>
            <CustomButton
              {...modalButton_props}
              selected={selected}
              handlePress={onPress}
            />
          </View>
        </View>
      </CustomModal>
    </Wrapper>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
