import { Text, View, StyleSheet} from 'react-native';


const Subtitle = props => {
  return (
    <View>
      <Text style={styles.subtitle}>{props.text}</Text>
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

export default Subtitle