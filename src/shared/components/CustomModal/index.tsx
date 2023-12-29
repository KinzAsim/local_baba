import {RF} from '@theme';
import {useModal} from '@utils';
import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Wrapper from '../wrapper';

interface Props {
  children?: any;
}

const CustomModal = (props: Props) => {
  const {children} = props;
  const {modalVisible, closeModal} = useModal();

  return (
    <Wrapper>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: RF(24),
          }}>
          {children}
        </View>
      </Modal>
    </Wrapper>
  );
};

export default CustomModal;
