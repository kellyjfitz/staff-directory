import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles, {colours} from '../styles.js';

const InputWithLabel = props => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} placeholder={props.placeholder}
      placeholderTextColor={colours.midGrey}
      onChangeText={props.onChangeText}
      text={props.text}
        />
    </View>
  );
};

export default InputWithLabel;
