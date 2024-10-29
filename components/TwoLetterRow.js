import { Text, View, StyleSheet} from 'react-native';
import Button from './Button'


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

const styles = StyleSheet.create({

  row: {
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
});


export default TwoLetterRow