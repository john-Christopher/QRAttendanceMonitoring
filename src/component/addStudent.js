import React from 'react';

import { Alert } from 'react-native';

import firestore from '@react-native-firebase/firestore';

function addStudent(idNum, regNum, email, name, CY, cc, qrValue ){
  firestore()
    .collection('students')
    .add({
      ClassCode: cc,
      Course: CY,
      Email: email,
      IdNumber: idNum,
      RegistrationNumber: regNum,
      QRCode: qrValue,
      Name: name,
      Status: "Absent"
    })
    .then(() => {
      Alert.alert(
        "Successfully added", 
        "Student added successfully",
        [
          {
            text: "Done",
            onPress: () => console.log("added success"),
          }
        ]
      )
    })
    .catch(err => {
      console.error("Error", err)
      Alert.alert(
        "Empty field",
        "Please fill up all the text field",
        [
          {
            text: "Ok",
            onPress: () => console.log("OK"),
          }
        ]
      )
    })
  }

export default addStudent;