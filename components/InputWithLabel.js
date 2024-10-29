import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputWithLabel = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} placeholder={props.placeholder}
      placeholderTextColor="grey"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    paddingLeft:5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius:10,
  },

});

export default InputWithLabel;
