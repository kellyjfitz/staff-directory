import {View } from 'react-native';
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
     
        <Button text='Add New Entry to Directory'
        onPress={() => navigation.navigate('AddEntry')}/>

        <Button text='Settings'
          onPress={() => navigation.navigate('Settings')}/>
      </View>
    </View>
  );
}

export default HomeScreen;