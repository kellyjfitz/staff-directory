import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import styles, {colours} from '../styles.js';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View>
        <Head head='Staff Directory'/>
        <Button text='Browse Staff Directory'
        onPress={() => navigation.navigate('Browse')}/>
      </View>
      <View style={{marginTop:25}}>
        <Head head='HR Only'/>
        <Button text='Login'
        onPress={() => navigation.navigate('HR', {screen:'HRLogin'})}/>
      </View>
    </View>
  );
}

export default HomeScreen