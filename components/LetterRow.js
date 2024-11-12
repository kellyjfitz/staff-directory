import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import styles from '../styles.js';

const LetterRow = ({ letters, onLetterPress }) => {
    const isLastRow = letters.length === 2;
  return (
    <View style={styles.row}>
        {isLastRow && <View style={{width:"20%"}}/>}
      {letters.map((letter) => (
        <Button key={letter} text={letter} width='20%' onPress={() => onLetterPress(letter)} />
      ))}
       {isLastRow && <View style={{width:"20%"}}/>}
    </View>
  );
};

export default LetterRow;
