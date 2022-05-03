import React from 'react';
import { ScrollView, Text, StyleSheet, View, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Aboutscreen({navigation, route}){
  const activeEmail = route.params?.activeEmail;
  const activeAccount = route.params?.activeAccount;

  return(
    <View style={styles.mainContainer}>
      <ScrollView style={styles.txtContainer}>
        <Text style={styles.txtHeader}>
          What is this App for?
        </Text>
        <Text style={styles.txtBody}>
          {'\t\t\t'}This app will automate the manual checking of attendance during class hour. It will also provide an attendance report of the students that attended the class, quiz and other given activities. Students will have a QR code printed on the back of their ID and they  will face it towards the camera of the tablet before they enter their respective classroom for their course. With this, students will have a lower risk of contracting the virus by eliminating  process that will allow an object to be passed around. Furthermore, it will help lessen the  dishonesty of the students during class attendance where students tend to write their friends’ name on the attendance sheet even when they are not around. It will also be the first step on  adapting to the new normal system because of this pandemic.{'\n'} 
        </Text>
        <Text style={styles.txtHeader}>
          Who developed this App?
        </Text>
        <Text style={styles.txtBody}>
          {'\t'}{'\t'}{'\t'}This app is developed by the fourth year students of Bicol University Polangui Campus, Academic Year 2021-2022, for partial completion of the requirements for Capstone Project. Specifically, the following students of BSIT-4B:
          {'\n'}{'\n'}
          1. Jason A. Pomposo {'\n'}
          2. Wyett Oliver M. Andaya {'\n'}
          3. John Christopher G. Sevilla
        </Text>
      </ScrollView>
      <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={() => navigation.navigate({
            name: 'Home',
            params: {
              activeEmail: activeEmail,
              activeAccount: activeAccount,
            }
          })}>
            <Icon name="home" type="material" size={35} color="#fff" style={styles.btnIcon} />
            <Text style={styles.btnText}>
              Home
            </Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => navigation.navigate({
            name: 'List',
            params: {
              activeEmail: activeEmail,
              activeAccount: activeAccount,
            }
          })}>
            <Icon name="list" type="material" size={35} color="#fff" style={styles.btnIcon} />
            <Text style={styles.btnText}>
              List
            </Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => navigation.navigate('Reader')}>
            <Icon name="qr-code-scanner" type="material" size={35} color="#fff" style={styles.btnIcon} />
            <Text style={styles.btnText}>
              Scanner
            </Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => navigation.navigate({
            name: 'About',
            params: {
              activeEmail: activeEmail,
              activeAccount: activeAccount,
            }
          })}>
            <Icon name="info" type="material" size={35} color="#fff" style={styles.btnIcon} />
            <Text style={styles.btnText}>
              About
            </Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => navigation.navigate({
            name: 'More',
            params: {activeEmail: activeEmail}
          })}>
            <Icon name="more-vert" type="material" size={35} color="#fff" style={styles.btnIcon}  />
            <Text style={styles.btnText}>
              More
            </Text>
          </Pressable>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  txtContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 70,
  },
  txtHeader: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",  
  },
  txtBody: {
    color: "#000",
    fontSize: 19,
    textAlign: "justify",
    fontStyle: "italic",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btn: {
    backgroundColor: "#191970",
    height: 65,
    borderRadius: 2,
    width: "20%",
    borderRightWidth: 1,
    borderRightColor: "#555",
    borderLefttWidth: 1,
    borderLefttColor: "#555",
  },
  btnIcon: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
    marginTop: 5,
    textShadowColor: "#000",
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    marginTop: -3,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 5,
  },
})