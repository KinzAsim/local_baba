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

const LoginContent = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focus, setFocus] = useState('');

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleLogin = () => {};

  const handleAuth = (titleResponse: any) => {};

  const handleRegister = () => {};

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
        onFocus={() => setFocus('email')}
        borderColor={focus == 'email' && colors.primary}
      />

      <InputField
        {...password_Props}
        icon={passwordVisible ? eyeHidden : eyeVisible}
        onPress={togglePassword}
        secureTextEntry={passwordVisible}
        onFocus={() => setFocus('password')}
        borderColor={focus == 'password' && colors.primary}
      />

      <Text
        onPress={() => navigate('ForgotPassword')}
        color={colors.primary}
        style={[globalStyles.flexEnd, margin.top_8]}>
        Forgot Password?
      </Text>

      <CustomButton {...loginButton_Props} handlePress={handleLogin} />
      <CustomButton {...authButton_Props} handlePress={handleAuth} />

      <Text color={colors.gray} regular center style={margin.top_32}>
        New To Local Baba?
      </Text>

      <CustomButton {...registerButton_Props} handlePress={handleRegister} />
    </View>
  );
};

export default LoginContent;
