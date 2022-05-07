import React, { useState } from 'react';

import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

function onSuccess (e) {
  
  const x = e.data;
  const arr = []
  console.log("Qr Code: " + x);
  firestore()
    .collection('students')
    .where("QRCode", "==", x)
    .get()
    .then(querySnapshot => {
      console.log("connection success")

      querySnapshot.forEach(documentSnapshot => {
        arr.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      
      })
      Alert.alert(
        "Scan Success",
        "QR Code Scan Successfully!",
        [
          {
            text: "OK",
            onPress: () => console.log("Ok")
          }
        ]
      )
      
    })
    .catch(err => {
      console.error('Scan Error', err)
      Alert.alert(
        "Scan Failed",
        "QR Code Scan Error!",
        [
          {
            text: "OK",
            onPress: () => console.log("Ok")
          }
        ]
      )
    }) 

    return arr;
}


export default onSuccess;