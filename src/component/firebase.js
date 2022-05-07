import React from 'react';

import { firebase } from '@react-native-firebase/auth';

function firebaseConfig (){
  var firebaseConfig = {
    apiKey: "AIzaSyBYBErgXELeZC8nRR6hTt0Aw2v2z1lTbno",
    authDomain: "qrattendancemonitoring-90058.firebaseapp.com",
    databaseURL: "https://qrattendancemonitoring-90058.firebaseio.com",
    projectId: "qrattendancemonitoring-90058",
    storageBucket: "qrattendancemonitoring-90058.appspot.com",
    messagingSenderId: "378341971593",
    appId: "1:141171295411:android:d4ff461ac04fb8e6959cc6",
  };
  
  
  firebase.initializeApp(firebaseConfig);
};

export default firebaseConfig;