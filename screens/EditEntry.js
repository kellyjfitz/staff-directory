import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head'
import Button from '../components/Button'
import InputWithLabel from '../components/InputWithLabel'
import styles, {colours} from '../styles.js';
import React, { useEffect, useState, useRef } from 'react';

const EditEntry = ({route}) => {
    const {item} = route.params;

    const [firstName, setFirstName] = useState(item.firstName);

    return (
    <ScrollView>
      <View style={styles.screen}>
        <Head head='Add New Entry'/>
        <InputWithLabel label='First name' text={firstName} />
       
        <Button text='Save entry' />
      </View>
    </ScrollView>
  );
}

export default EditEntry