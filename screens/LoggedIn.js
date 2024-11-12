import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import Subtitle from '../components/Subtitle';
import styles, {colours} from '../styles.js';

const LoggedIn = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View>
        <Head head='Logged In'/>
        <Subtitle text={"To edit an existing entry, " +
         "fine it in the Staff Directory, click on it and " +
         "press the Edit button"}/>
        <Button text='Browse Staff Directory'
        onPress={() => navigation.navigate('Browse')}/>
        <Button text='Add New Entry'
        onPress={() => navigation.navigate('Add')}/>
      </View>
    </View>
  );
}

export default LoggedIn