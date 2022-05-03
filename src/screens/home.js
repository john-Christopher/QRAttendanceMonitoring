import React from "react";
import { Pressable, StyleSheet, View, Text, ScrollView, Image, ImageBackground, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";

export default function Homescreen({navigation, route}){
  const [loading, setLoading] = React.useState("true");
  const activeEmail = route.params?.activeEmail;
  const activeAccount = route.params?.activeAccount;

  // if(loading){
  //   return <ActivityIndicator animating={true} size="large" />
  // }else{
  //   setLoading("false");
    return(
      <ImageBackground source={require('../img/bgHome.jpg')} style={styles.imgbgkd}>
        <View style={styles.mainContainer}>
          <View style={styles.imgContainer}>
            <Image 
              source={require('../img/Bicol_University.png')} 
              style={styles.imgLogo1}
              resizeMode="contain"
            />
            <Text style={styles.txtTitle}>
              Bicol University Polangui Campus
            </Text>
            <Image 
              source={require('../img/logo.png')} 
              style={styles.imgLogo2}
              resizeMode="contain"
            />
          </View>
          <ScrollView style={styles.txtContainer}>
            <Text style={styles.txtHeader}>
            Vision
            </Text>
            <Text style={styles.txtBody}>
              A World-Class University Producing Leaders and Change Agents for Social Transformation and Development.
            </Text>
            <Text style={styles.txtHeader}>
              Mission
            </Text>
            <Text style={styles.txtBody}>
              The Bicol University shall give professional and technical training, and provide advanced and specialized instruction in literature, philosophy, the sciences and arts, besides providing for the promotion of scientific and technological researches. (RA 5521, Sec. 3.0)
            </Text>
            <Text style={styles.txtHeader}>
              Quality Policy
            </Text>
            <Text style={styles.txtBody}>
              Bicol University commits to continually strive for excellence in instruction, research, and extension by meeting the highest level of clientele satisfaction and adhering to quality standards and applicable statutory and regulatory requirements.
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
      </ImageBackground>
    );
  // }
}

const styles = StyleSheet.create({
  imgbgkd: {
    flex: 1,
    height: "32%",
  },
  mainContainer: {
    flex: 1,
  },
  imgContainer:{
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
  },
  imgLogo1:{
    width: 70,
    height: 70,
  },
  imgLogo2:{
    width: 70,
    height: 70,
  },
  txtTitle:{
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    width: 200,
    textAlignVertical: "center",
    textAlign: "center",
    marginLeft: 10,
    textShadowColor: "#000",
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 5,
  },
  txtContainer: {
    marginTop: "23%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 45,
    backgroundColor: "#fff",
  },  
  txtHeader:{
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  txtBody: {
    color: "#000",
    fontSize: 19,
    fontStyle: "italic",
    textAlign: "justify",
    marginBottom: 25,
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
  // mainContainer: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  //   alignItems: "flex-end",
  // },
  // btnContainer: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "green",
  // }, 
  // txtContainer: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "aqua",
  // }
});