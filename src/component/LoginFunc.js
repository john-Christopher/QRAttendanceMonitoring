import React from 'react';

import auth from '@react-native-firebase/auth';

function LoginAuth(email, pwd, account, navigation, route){
  

  auth().signInWithEmailAndPassword(email, pwd)
    .then(() => {
      navigation.navigate({
        name: 'Home',
        params: {
          activeEmail: email,
          activeAccount: account
        }
      })
      
      console.log(
        "Login Success",
        [email, account]
      )
    }).catch(error => console.error('Login Error', error))
  
  
}

export default LoginAuth;