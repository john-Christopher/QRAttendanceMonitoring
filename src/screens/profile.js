import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, Text, Button, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';


function ProfileScreen({navigation, route}){
  const activeEmail = route.params?.activeEmail;
  const [profile, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('profile')
      .where("email", "==", activeEmail)
      .onSnapshot(querySnapshot => {
        const profile = [];

        querySnapshot.forEach(documentSnapshot => {
          profile.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        
        setUsers(profile)
      })
    return () => subscriber();
  }, []);

  return(
    <FlatList
      data={profile}
      renderItem={({ item }) => (
        <View style={styles.mainContainer}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatarLogo} source={require('../img/avatar.jpg')}/>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txtTitle}>ID Number: </Text>
            <Text style={styles.txtBody}>{item.IDNumber}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txtTitle}>Name: </Text>
            <Text style={styles.txtBody}>{item.Name}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txtTitle}>Email address: </Text>
            <Text style={styles.txtBody}>{item.email}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txtTitle}>Designation: </Text>
            <Text style={styles.txtBody}>{item.Designation}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txtTitle}>Department: </Text>
            <Text style={styles.txtBody}>{item.Department}</Text>
          </View>
        </View>
      )}

    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  txtContainer: {
    flexDirection: "row",
    margin: 10, 
    justifyContent: "space-evenly", 
    borderBottomWidth: 1,
  },
  txtHeader: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",  
  },
  txtTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlignVertical: "center"
  }, 
  txtBody: {
    color: "#000",
    fontSize: 16,
    textAlign: "auto",
    fontStyle: "italic",
    lineHeight: 40,
  },
  
})

export default ProfileScreen