import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import ProfileFetch from '../component/fetchProfile';

import auth from '@react-native-firebase/auth';

export default function Morescreen({route, navigation}){
  const activeEmail = route.params?.activeEmail
  return(
    <ScrollView style={styles.mainContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarLogo} source={require('../img/avatar.jpg')}/>
        <Text style={styles.avatarDesc}>
          {route.params?.activeEmail}
        </Text>
      </View>
      <View style={styles.optContainer}>
        <Pressable style={styles.btn} onPress={() => {
          navigation.navigate({
            name: 'Profile',
            params: {
              activeEmail: activeEmail
            }
          })
        }}>
          <Icon name="person" type="material" size={30} color="#000" style={styles.optLogo} />
          <Text style={styles.optTxt}>
            Profile
          </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" type="material" size={30} color="#000" style={styles.optLogo} />
          <Text style={styles.optTxt}>
            Settings
          </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => navigation.navigate("Help")}>
          <Icon name="help" type="material" size={30} color="#000" style={styles.optLogo} />
          <Text style={styles.optTxt}>
            Help &amp; Support
          </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => LogoutAuth(navigation)}>
          <Icon name="logout" type="material" size={30} color="#000" style={styles.optLogo} />
          <Text style={styles.optTxt}>
            Logout
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

function LogoutAuth(navigation){
  auth().signOut()
    .then(() => {
      console.log('User logged out')
      navigation.navigate('Login')
    })
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  optContainer: {
    flex: 1,
  },
  btn: {
    flexDirection: "row",
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },  
  optLogo: {
    marginRight: 10,
  },
  optTxt: {
    fontSize: 22,
    color: "#000",
  },
  avatarContainer: {
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  avatarLogo: {
    width: 150,
    height: 150,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 150 / 2,
    alignSelf: "center",
  },
  avatarTxt: {
    color: "#000",
    fontSize: 22,
    textAlign: "center",
  },
  avatarDesc: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    fontStyle: "italic",
  },
})