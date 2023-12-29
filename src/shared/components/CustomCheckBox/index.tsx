import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TextProps,
} from 'react-native';
import React, {useState} from 'react';
import {RF} from '@theme';
import Text from '../text';
import {useTheme} from '@react-navigation/native';
import {checkbox} from '@assets';
interface Props extends TextProps {
  label?: any;
  isTop?: any;
  circle?: any;
  checkselect?: any;
  value?: any;
  onPress?: (value: any) => void;
}
const CustomCheckBox = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [check, setCheck] = useState(false);
  const {label, isTop, circle, checkselect, value, onPress = () => {}} = props;
  const handlePress = () => {
    setCheck(!check);
  };
  return (
    <>
      {circle == true ? (
        <TouchableOpacity
          onPress={() => onPress(value)}
          style={[styles.roundView, {borderColor: colors.primary}]}>
          <View
            style={{
              height: '70%',
              width: '70%',
              backgroundColor:
                checkselect == value ? colors.primary : 'transparent',
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: isTop ? isTop : 0,
          }}>
          <TouchableOpacity onPress={handlePress} style={styles.checkView}>
            <Image
              source={checkbox}
              style={{
                height: '100%',
                width: '100%',
                tintColor: check ? colors.primary : 'transparent',
                borderWidth: check ? 0 : 1,
                borderColor: colors.extraLightGray,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
          {label && (
            <Text color={colors.dimGray} style={{marginLeft: 10}}>
              {label}
            </Text>
          )}
        </View>
      )}
    </>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  checkView: {
    height: RF(20),
    width: RF(20),
  },
  roundView: {
    height: RF(18),
    width: RF(18),
    borderRadius: 9,
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
