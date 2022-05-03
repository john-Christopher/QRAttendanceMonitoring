import React from 'react';

import { firebase } from '@react-native-firebase/auth';

function firebaseConfig (){
  var firebaseConfig = {
    apiKey: "AIzaSyC28Z6X93lwPtS1ew8dI2DdRZO05FG929s",
    authDomain: "classattendanceusingqr.firebaseapp.com",
    databaseURL: "https://classattendanceusingqr.firebaseio.com",
    projectId: "classattendanceusingqr",
    storageBucket: "classattendanceusingqr.appspot.com",
    messagingSenderId: "378341971593",
    appId: "1:681378528209:android:f02db0929c1e328e8bfef0",
  };
  
  
  firebase.initializeApp(firebaseConfig);
};

export default firebaseConfig;