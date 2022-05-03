import React from 'react';
import { ScrollView, View, Pressable, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function SupportScreen ({navigation}){
  return(
    <View style={styles.mainContainer}>
      <ScrollView style={styles.txtContainer}>
        <Text style={styles.txtHeader}>
          For inquiries please contact: {'\n'}
        </Text>
        <Text style={styles.txtTitle}>
          Through Email:
        </Text> 
        <View style={styles.txtIcnHolder}>
          <Icon name="email" type="material" size={20} color="#000" style={styles.icnImg} />
          <Text style={styles.txtBody}>johnchristophergaray.sevilla@bicol-u.edu.ph
          </Text>
        </View>
        <View style={styles.txtIcnHolder}>
          <Icon name="email" type="material" size={20} color="#000" style={styles.icnImg} />
          <Text style={styles.txtBody}>jasonarmario.pomposo@bicol-u.edu.ph
          </Text>
        </View>
        <View style={styles.txtIcnHolder}>
          <Icon name="email" type="material" size={20} color="#000" style={styles.icnImg} />
          <Text style={styles.txtBody}>wyettolivermendoza.andaya@bicol-u.edu.ph
          </Text>
        </View>
      </ScrollView>
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
  txtTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
  }, 
  txtIcnHolder: {
    flex: 1,
    flexDirection: "row",
    margin: 2,
  },
  txtBody: {
    color: "#000",
    fontSize: 19,
    textAlign: "auto",
    fontStyle: "italic",
    marginLeft: 5,
    marginRight: 5,
  },
  icnImg: {
    alignSelf: "center"
  }
})