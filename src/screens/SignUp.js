import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Google from '../../assets/IOS_Google_icon.png'
import Apple from '../../assets/apple.png';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get("window");

const SignUp = () => {
  return (
    <View>
      <View style={[styles.colorView]} />
      <View style={styles.contentView} />
      <View style={styles.contentView1}>
        <Text style={styles.textHead}>Hello User!</Text>
        <Text style={styles.textContent}>Enter your details to create a account</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="Email Address" style={[styles.inputStyle, styles.shadow]} />
        <TextInput placeholder="Create Password" style={[styles.inputStyle, styles.shadow]} />
        <TouchableOpacity style={styles.buttonStyle}>
        <AntDesign name="arrowright" style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.iconView}>
      <Image source={Google} style={styles.iconStyle} />
      <Image source={Apple} style={styles.iconStyleApple} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  textHead:{
    fontSize: 40,
    color: '#fff',
    textAlign: 'center'
    },

  textContent:{
    fontSize: 15,
    color: '#fff'
    },

  colorView:{
    width: width*1.5,
    height: height * 0.45,
    backgroundColor: "#275868",
    position: 'absolute',
    top: 0,
    right: -3,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    zIndex:1
    },

  contentView: {
    width: width,
    height: height * 0.5,
    backgroundColor: "#16CFC4",
  },

  contentView1:{
      position: 'absolute',
      top: height *0.15,
      zIndex:1,
      alignSelf: 'center'
  },

  inputView: {
    backgroundColor: "#16CFC4",
    height: height * 0.45,
    width: width,
  },

  inputStyle: {
    margin: 15,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#fff",
    textAlign: 'center',
  },

  buttonStyle: {
    width: 120,
    height: 40,
    backgroundColor: "#275868",
    borderRadius: 11,
    alignSelf: 'center',
    marginTop: 10
  },

  arrowStyle:{
    color: '#fff',
    fontSize: 30,
    alignSelf:'center',
    marginTop: 4,
  },
  shadow: {
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 10,
    shadowOpacity: 0.05,
    elevation: 8,
  },
  iconStyle:{
    height: 50,
    width: 50,
  },
  iconStyleApple:{
    height: 46,
    width: 46,
    borderRadius: 100
  },
  iconView:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    marginTop:30, 
    width: '30%', 
    alignSelf:'center',
  },
});

export default SignUp;
