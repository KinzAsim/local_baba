import {apple, email, google} from '@assets';
import {margin, mixGray, RF} from '@theme';

export const password_Props = {
  containerStyle: margin.top_18,
  placeHolder: 'Password',
};

export const email_Props = {
  placeHolder: 'example@gmail.com',
  containerStyle: margin.top_32,
  icon: email,
};

export const dontHaveAcount_Props = {
  size: 16,
  regular: true,
  center: true,
  style: margin.top_24,
};

export const or_Props = {
  size: 16,
  regular: true,
  center: true,
  style: margin.top_18,
};

export const authButton_Props = {
  title: ' Google',
  title2: 'Apple',
  leftIcon: google,
  Icon2: apple,
  width: RF(140),
  spacing: RF(8),
  justifyContent: 'space-between',
  numberOfButtons: '2',
  textStyle: {
    color: mixGray,
    fontFamily: 'Popins-Regular',
    marginBottom: 0,
  },
  containerStyle: {
    height: RF(50),
    marginTop: RF(32),
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
};
export const registerButton_Props = {
  title: 'Register',
  textStyle: {
    color: mixGray,
    fontFamily: 'Popins-Regular',
    marginBottom: 0,
  },
  containerStyle: {
    borderRadius: 12,
    marginTop: RF(32),
    backgroundColor: '#F8F8F8',
  },
};
export const loginButton_Props = {
  title: 'LOG IN',
  containerStyle: margin.top_32,
};
