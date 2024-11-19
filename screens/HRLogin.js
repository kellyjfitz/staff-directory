import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import Subtitle from '../components/Subtitle';
import styles, {colours} from '../styles.js';
import React, {useState} from 'react';
import showAlert from '../components/Alert.js';

const HRLogin = ({ navigation }) => {
  const incorrectLogin = "The login was unsuccessful. \n" +
                          "Please contact the IT Service Desk on 1800 000 000 " +
                          "to reset your password.";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const authoriseUser = () => {
        if (userName === "admin" && password === "admin"){
            navigation.navigate('LoggedIn');
        }
        else {
            showAlert("Login unsuccessful", incorrectLogin);
        }
  }

  return (
      <View style={styles.screen}>
        <Head head='HR Login'/>
        <Subtitle text={"HR team members should login to update " +
            "staff listings or add new staff listing "}/>
        <InputWithLabel 
          label='First name' 
          placeholder='Enter first name' 
          onChangeText={setUserName} 
          value={userName} 
         />
        <InputWithLabel 
          label='Password' 
          placeholder='Enter password' 
          onChangeText={setPassword} 
          value={password} 
         />
        <Button text='Login' onPress={authoriseUser}/>
      </View>
  );
}

export default HRLogin;
