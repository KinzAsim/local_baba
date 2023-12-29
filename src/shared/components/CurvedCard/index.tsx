import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {RF} from '@theme';

interface Props {
  children?: any;
}

const CurvedCard = (props: Props) => {
  const {children} = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={styles.card}>{children}</View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CurvedCard;

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: RF(24),
    padding: RF(24),
  },
});
