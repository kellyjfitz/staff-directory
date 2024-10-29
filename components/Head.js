import { Text, View, StyleSheet} from 'react-native';


const Head = props => {
  return (
    <View>
      <Text style={styles.head}>{props.head}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  head: {
    fontSize:30,
    fontWeight:'bold',
    color:'#941a1d',
    textAlign:'center',
    marginVertical:20,
  }
});

export default Head