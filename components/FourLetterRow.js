import { Text, View, StyleSheet} from 'react-native';
import Button from './Button'


const FourLetterRow = props => {
  return (
    <View style={styles.row}>
      <Button text={props.letter1} width='20%' />
      <Button text={props.letter2} width='20%' />
      <Button text={props.letter3} width='20%' />
      <Button text={props.letter4} width='20%' />
    </View>
  );
}

const styles = StyleSheet.create({

  row: {
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
});


export default FourLetterRow