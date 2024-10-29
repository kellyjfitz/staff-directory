import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'space-evenly', backgroundColor:'#F5F5F5'}}>
      <View>
        <Head head='Staff Directory'/>
        <Button text='Browse Staff Directory'
        onPress={() => navigation.navigate('Browse')}/>
        <Button text='Search Staff Directory' />
      </View>
      <View>
        <Head head='HR Only'/>
        <Button text='Update Directory Entry' />
        <Button text='Add New Directory Entry'
        onPress={() => navigation.navigate('Add')}/>
      </View>
    </View>
  );
}

export default HomeScreen