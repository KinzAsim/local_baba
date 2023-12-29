import {useModal} from '@utils';
import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';

interface Props {
  children?: any;
}

const CustomModal = (props: Props) => {
  const {children} = props;
  const {modalVisible, closeModal} = useModal();

  return (
    <Modal visible={modalVisible} animationType="slide" transparent>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
