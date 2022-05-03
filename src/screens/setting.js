import React from 'react';
import { Pressable } from 'react-native';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SettingScreen ({navigation}){
  return(
    <View style={styles.mainContainer}>
      <ScrollView style={styles.txtContainer}>
        <Text style={styles.txtTitle}>
          Password Setting{'\n'}
        </Text>
        <Text style={styles.txtBody}>
          Current Password:
        </Text>
        <TextInput
          placeholder="Current Password . . ."
          placeholderTextColor="#999"
          style={styles.txtInput}
          secureTextEntry={true}
        />
        <Text style={styles.txtBody}>
          New Password:
        </Text>
        <TextInput
          placeholder="New Password . . ."
          placeholderTextColor="#999"
          style={styles.txtInput}
          secureTextEntry={true}
        />
        <Text style={styles.txtBody}>
          Confirm Password:
        </Text>
        <TextInput
          placeholder="Confirm Password . . ."
          placeholderTextColor="#999"
          style={styles.txtInput}
          secureTextEntry={true}
        />
        <Text style={styles.txtTitle}>
          Recovery Setting {'\n'}
        </Text>
        <Text style={styles.txtBody}>
          Email Address:
        </Text>
        <TextInput
          placeholder="Email address . . ."
          placeholderTextColor="#999"
          style={styles.txtInput}
        />
        <Text style={styles.txtBody}>
          Phone number:
        </Text>
        <TextInput
          placeholder="Phone number . . ."
          placeholderTextColor="#999"
          style={styles.txtInput}
          keyboardType= "number-pad"
        />
        <Pressable style={styles.btnSave}>
          <Text style={styles.btnText}>
            Save changes
          </Text>
        </Pressable>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create ({
  mainContainer: {
    flex: 1,
  },
  txtContainer: {
    margin: 15,
  },
  txtTitle: {
    fontSize: 19,
    color: "#000",
    fontWeight: "bold",
  },
  txtBody: {
    fontSize: 17,
    color: "#000",
  },
  txtInput: {
    marginTop: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    padding: 5,
  },
  btnSave: {
    alignSelf: "flex-end",
    backgroundColor: "#05f",
    padding: 10,
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    fontSize: 15,

  },
})