import React, { useState } from 'react';

import { ScrollView, View, Modal, Text, Pressable, StyleSheet } from 'react-native';

function modalSuccess(x, navigation, route) {
  const [activeModal, setModalVisible] = useState(false);
  
  return(
    <Modal
      animationType='fade'
      transparent={true}
      visible={activeModal}
      onRequestClose={() => {
        Alert.alert("Modal has been closed");
        setModalVisible(!activeModal);  
      }}
    >
      <ScrollView style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTxtHeader}>
            QR Scan Success {'\n'}
          </Text>
          <Text style={styles.modalTxt}>
            QR Code scanned successfully
          </Text>
          <Pressable style={styles.btnModal} onPress={() => { 
            setModalVisible(!activeModal)
            navigation.navigate('Home')
          }}>
            <Text style={styles.modalBtnTxt}>Ok</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  )
}

const styles = StyleSheet.create ({
  btnModal: {
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#191970",
    borderColor: "#000",
  },
  centeredView: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#ddd',
  },
  modalView: {
    justifyContent: "flex-start",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  btnModalClose: {
    alignSelf: "flex-end"
  },
  modalTxtHeader: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalTxt: {
    color: "#000",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 30,
    padding: 5,
  },
})

export default modalSuccess;