'use strict';

import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable, Modal, Alert, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import addStudent from '../component/addStudent';
import srcStd from '../component/searchStudent';
import qrCode from '../component/codeGen';

import firestore from '@react-native-firebase/firestore';

export default function ListScreen({navigation, route}){
  const qrValue1 = qrCode();
  const qrValue2 = qrCode();
  const activeEmail = route.params?.activeEmail;
  const activeAccount = route.params?.activeAccount;
  const [stdName, setStdName] = React.useState([]);
  const [idNum, setIdNum] = React.useState([]);
  const [regNum, setRegNum] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [CY, setCY] = React.useState([]);
  const [cc, setCC] = React.useState([]);
  const [activeModal, setModalVisible] = React.useState(false);
  const [present, setPresent] = useState([]);
  const table = {
    tableHead: ['Name', 'Course', 'Course Code', 'Status']
  };
  
  

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('attendance')
  //     .onSnapshot(querySnapshot => {
  //       const present = []

  //       querySnapshot.forEach(documentSnapshot => {
  //         present.push({
  //           ...documentSnapshot.data(),
  //           key: documentSnapshot.id,
  //         });
  //       });

  //       setPresent(present)
  //     })

  //     return () => subscriber();
  // })

  return(
    <View style={styles.mainContainer}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={activeModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
          setModalVisible(!activeModal);  
        }}
      >
        <ScrollView style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxtHeader}>
              Generate Student QR Code {'\n'}
            </Text>
            <Text style={styles.modalTxt}>
              ID Number:
            </Text>
            <TextInput
              value={idNum}
              onChangeText={setIdNum}
              placeholder='e.g. 2018-PC-111111'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Registration Number:
            </Text>
            <TextInput
              value={regNum}
              onChangeText={setRegNum} 
              placeholder='e.g. 20220115998'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              BU Email address:
            </Text>
            <TextInput 
              value={email}
              onChangeText={setEmail} 
              placeholder='e.g. juandela.cruz@bicol-u.edu.ph'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Name:
            </Text>
            <TextInput 
              value={name}
              onChangeText={setName} 
              placeholder='e.g. Juan Dela Cruz'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Course &amp; Year:
            </Text>
            <TextInput 
              value={CY}
              onChangeText={setCY} 
              placeholder='e.g. BSIT 1A'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Course Code:
            </Text>
            <TextInput 
              value={cc}
              onChangeText={setCC} 
              placeholder='e.g. IT - 117'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <QRCode 
              value={qrValue1}
              size={250}
              bgColor='#fff'
              fgColor='#000'
            />
            {/* second form */}
            {/* <Text>{'\n'}</Text>
            <Text style={styles.modalTxtHeader}>
              Generate Student QR Code {'\n'}
            </Text>
            <Text style={styles.modalTxt}>
              ID Number:
            </Text>
            <TextInput
              value={idNum}
              onChangeText={setIdNum}
              placeholder='e.g. 2018-PC-111111'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Registration Number:
            </Text>
            <TextInput
              value={regNum}
              onChangeText={setRegNum} 
              placeholder='e.g. 20220115998'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              BU Email address:
            </Text>
            <TextInput 
              value={email}
              onChangeText={setEmail} 
              placeholder='e.g. juandela.cruz@bicol-u.edu.ph'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Name:
            </Text>
            <TextInput 
              value={name}
              onChangeText={setName} 
              placeholder='e.g. Juan Dela Cruz'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Course &amp; Year:
            </Text>
            <TextInput 
              value={CY}
              onChangeText={setCY} 
              placeholder='e.g. BSIT 1A'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <Text style={styles.modalTxt}>
              Course Code:
            </Text>
            <TextInput 
              value={cc}
              onChangeText={setCC} 
              placeholder='e.g. IT - 117'
              placeholderTextColor={'#999'}
              style={styles.modalInput}
            />
            <QRCode 
              value={qrValue2}
              size={250}
              bgColor='#fff'
              fgColor='#000'
            /> */}
            <View style={styles.modalBtnHandler}>
              <Pressable style={styles.btnModal} onPress={() => addStudent(idNum, regNum, email, name, CY, cc, qrValue)}>
                <Text style={styles.modalBtnTxt}>Submit</Text>
              </Pressable>
              <Pressable style={styles.btnModal} onPress={() => setModalVisible(!activeModal)}>
                <Text style={styles.modalBtnTxt}>Close</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </Modal>
      {/* end modal */}
      <ScrollView style={styles.menuContainer}>
        <View style={styles.menuBar}>
          {activeAccount == 'Registrar' ? (
            <Pressable onPress={() => setModalVisible(true)} style={styles.btnModal}>
            <Icon name="add" type="material" size={25} color="#fff" />
          </Pressable>
          ) : (
            null
          ) }
          <View style={styles.srchBar}>
            <TextInput 
              value={stdName}
              onChangeText={setStdName}
              placeholder='Search student . . .'
              placeholderTextColor={'#999'}
              style={styles.srchInput}
            />
            <Pressable onPress={() => srcStd(stdName)} style={styles.btnModal}>
            <Icon name="search" type="material" size={25} color="#fff" />
          </Pressable>
          </View>
        </View>
        {/* <Table style={styles.tbl} borderStyle={{
          borderWidth: 2, 
          borderColor: '#000'
        }}>
          <Row data={table.tableHead} textStyle={{
            textAlign: "center",
            color: "#000",
            padding: 5,
            fontWeight: "bold",
            fontSize: 15,
          }}/>
        </Table> */}
      </ScrollView>
      {/* <FlatList 
        data={present}
        renderItem={({ item }) => {
          <ScrollView style={styles.tableHeader}>
            <View style={styles.headerContainer}>
              <Text style={styles.txtHeader}>Name</Text>
              <Text style={styles.txtHeader}>Course</Text>
              <Text style={styles.txtHeader}>Class {'\n'} Code</Text>
              <Text style={styles.txtHeader}>Status</Text>
            </View>
          </ScrollView>
        }}
      />
      <FlatList 
        data={present}
        renderItem={({ item }) => (
          <ScrollView style={styles.mainContainer}>
            <View style={styles.dataContainer}>
              <Text style={styles.txtData}>{item.Name}</Text>
              <Text style={styles.txtData}>{item.Course}</Text>
              <Text style={styles.txtData}>{item.ClassCode}</Text>
              <Text style={styles.txtData}>{item.Status}</Text>
            </View>
          </ScrollView>
        )}
      /> */}
      {/* end main view */}
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
  },
  btnModal: {
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#191970",
    borderColor: "#000",
  },
  centeredView: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#ddd',
  },
  modalView: {
    justifyContent: "flex-start",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  btnModalClose: {
    alignSelf: "flex-end"
  },
  modalTxtHeader: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalTxt: {
    color: "#000",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 30,
    padding: 5,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#000",
    paddingBottom: 1,
    paddingTop: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: 250,
    color: "#000",
  },
  modalBtnHandler: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  modalBtnTxt: {
    color: "#fff",
    fontSize: 15,
  },
  menuContainer: {
    flex: 1,
    alignContent: "center",
  },
  contentTxt: {
    color: "#000",
    fontSize: 16,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  srchBar: {
    flexDirection: "row",
    marginBottom: 5,
  },
  srchInput: {
    color: '#000',
    borderWidth: 1,
    borderColor: "#000",
    paddingBottom: 1,
    paddingTop: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10,
    borderRadius: 5,
  },
  srchBtn: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#191970",
    borderColor: "#000",
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
  headerContainer: {
    flexDirection: "row",
  }, 
  txtHeader: {
    borderWidth: 1,
    color: "#000",
    padding: 20,
    fontWeight: "bold",
    fontSize: 16,
    width: 90,
  },
  dataContainer: {
    flexDirection: "row",
  },
  txtData: {
    borderWidth: 1,
    color: "#000",
    padding: 20,
    width: 90,
  }
})
