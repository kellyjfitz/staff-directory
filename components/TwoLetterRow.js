import { Text, View, StyleSheet} from 'react-native';
import Button from './Button'
import styles, {colours} from '../styles.js';

const TwoLetterRow = props => {
  return (
    <View style={styles.row}>
      <View style={{width:'20%'}}></View>
      <Button text={props.letter1} width='20%' />
      <Button text={props.letter2} width='20%' />
      <View style={{width:'20%'}}></View>
      </View>

  );
}

export default TwoLetterRow