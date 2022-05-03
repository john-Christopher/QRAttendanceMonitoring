import React from 'react';

import firestore from '@react-native-firebase/firestore';

function srcStd(stdName){
  firestore()
    .collection('students')
    .where('Name', '==', stdName)
    .get()
    .then(querySnapshot => {
      console.log('Query Connected')

      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data())
      })
    })
    .catch(err => {
      console.error("Query not found", err)
    })
}

export default srcStd;