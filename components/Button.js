import { Text, View, StyleSheet, Image, Pressable } from 'react-native';


const Button = props => {
  return (
    <Pressable style={[styles.button, { width: props.width || '75%' }]}
    onPress={props.onPress}
    >
      <Text style={styles.btnText}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

button: {
  backgroundColor:'#3B3B3B',
  borderRadius:10,
  padding: 10,
  marginTop:10,
  marginBottom:10,
  alignSelf: 'center'
},
btnText: {
  fontSize:20,
  fontWeight:'bold',
  color:'#ffffff',
  textAlign:'center',
}
});
export default Button