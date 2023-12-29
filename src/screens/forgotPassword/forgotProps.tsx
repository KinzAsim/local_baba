import {email} from '@assets';
import {margin, primary, RF, textColor3} from '@theme';

export const forgotEmail_props = {
  placeHolder: 'example@gmail.com',
  containerStyle: margin.top_24,
  icon: email,
  borderColor: primary,
  cursorColor: primary,
};

export const sendEmail_props = {
  title: 'Send Email',
  containerStyle: margin.top_40,
};

export const modalButton_props = {
  containerStyle: {
    borderRadius: 8,
    borderWidth: 1,
    height: RF(40),
    borderColor: '#DDDDDD',
  },
  numberOfButtons: '2',
  justifyStyle: {
    marginTop: RF(24),
    justifyContent: 'space-bewtween',
    width: '100%',
  },
  width: RF(120),
  title: 'Change',
  title2: 'Confirm',
  activeColor: primary,
  inactiveTextColor: textColor3,
  activeTextColor: '#fff',
};
