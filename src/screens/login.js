import React, { useState, useEffect } from 'react';
import {ScrollView, Image, Button, Text, TextInput, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import LoginAuth from '../component/LoginFunc';

export default function Loginscreen ({navigation, route}){
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [account, setAccount] = useState('');

  return(
    <ScrollView style={styles.container}>
      <Image source={require('../img/logo.png')} style={styles.img} />
      <Text style={styles.header}>
        Class Attendance Monitoring System for BUPC using QR Code Technology
      </Text>
      <Text style={styles.txt}>
        Email address
      </Text>
      <TextInput
        placeholder="Enter your email address"
        placeholderTextColor="#999"
        style={styles.txtInput}
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.txt}>
        Password:
      </Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={setPwd}
        placeholder="Enter your password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={pwd}
      />
      <Text style={styles.txt}>
        Account Type:
      </Text>
      <Picker
        selectedValue={account}
        onValueChange={(itemValue, itemIndex) =>
          setAccount(itemValue)
        }
        style={styles.txtPicker}
        dropdownIconColor={"#000"}
      >
        <Picker.Item label='Choose account type' value='Choose account type'/>
        <Picker.Item label="Professor" value="Professor" />
        <Picker.Item label="Registrar" value="Registrar"/>
      </Picker>
      <View style={styles.btn}>
        <Button
          title="Login"
          onPress={() => LoginAuth(email, pwd, account, navigation, route)}
        />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    marginTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    width: 200,
    textAlign: 'center',
    marginLeft: 85,
  },
  txt: {
    fontSize: 15,
    color: 'black',
    marginLeft: 30,
    marginTop: 20,
  },
  txtInput: {
    color: 'black',
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  txtPicker: {
    flex: 1,
    width: 300,
    alignSelf: "center",
    color: "#000",
    borderColor: "#000",
    borderStyle: 'dashed',
  },
  btn:{
    marginHorizontal: 150,
    marginTop: 10,
    height: 100,
  },
})

