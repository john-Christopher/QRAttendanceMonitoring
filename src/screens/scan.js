import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import onSuccess from '../component/QRScan';

function Readerscreen({navigation}){
  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      showMarker={true}
      bottomContent={
        <Pressable style={styles.btnPress} onPress={() => {
          navigation.navigate('List')
        }}>
          <Text style={styles.txtPress}>Go to List</Text>
        </Pressable>
      }
    />
  );
}

const styles = StyleSheet.create ({
  btnPress: {
    position: 'absolute',
    bottom: 15,
    backgroundColor: "#05f",
    marginTop: 20,
    borderRadius: 6,
  },
  txtPress: {
    color: "#fff",
    padding: 10,
  }
})

export default Readerscreen;