import { Text, View, StyleSheet} from 'react-native';


const Listing = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  subtitle: {
    fontSize:24,
    color:'#262626',
    textAlign:'center',
    marginVertical:20,
  }
});

export default Listing