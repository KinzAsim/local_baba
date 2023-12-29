import {useTheme} from '@react-navigation/native';
import {eyeHidden, eyeVisible} from '@assets';
import {globalStyles, margin} from '@theme';
import CustomButton from '../CustomButton';
import InputField from '../inputField';
import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../text';
import {
  authButton_Props,
  email_Props,
  loginButton_Props,
  password_Props,
  registerButton_Props,
} from './loginContentProps';
import {navigate} from '@services';
import {useFormik} from 'formik';
import {LoginValidationSchema} from '@utils';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '@redux';
const LoginContent = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focus, setFocus] = useState('');
  const dispatch = useDispatch();
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleLogin = (values: any) => {
    dispatch(setIsLoggedIn(true));
  };

  const handleAuth = (titleResponse: any) => {};

  const handleRegister = () => {};

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values: any) => {
      handleLogin(values);
    },
  });

  return (
    <View>
      <Text color={colors.primary} size={24} semiBold style={margin.top_64}>
        Welcome Back!
      </Text>

      <Text color={colors.gray} regular style={margin.top_4}>
        Please Log In To Your Account!
      </Text>

      <InputField
        {...email_Props}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onFocus={() => setFocus('email')}
        borderColor={focus == 'email' && colors.primary}
      />
      {formik.touched.email && formik.errors.email && (
        <Text style={globalStyles.errors}>{formik.errors.email}</Text>
      )}
      <InputField
        {...password_Props}
        icon={passwordVisible ? eyeHidden : eyeVisible}
        onPress={togglePassword}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry={passwordVisible}
        onFocus={() => setFocus('password')}
        borderColor={focus == 'password' && colors.primary}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={globalStyles.errors}>{formik.errors.password}</Text>
      )}
      <Text
        onPress={() => navigate('ForgotPassword')}
        color={colors.primary}
        style={[globalStyles.flexEnd, margin.top_8]}>
        Forgot Password?
      </Text>

      <CustomButton {...loginButton_Props} handlePress={handleSubmit} />
      <CustomButton {...authButton_Props} handlePress={handleAuth} />

      <Text color={colors.gray} regular center style={margin.top_32}>
        New To Local Baba?
      </Text>

      <CustomButton {...registerButton_Props} handlePress={handleRegister} />
    </View>
  );
};

export default LoginContent;
