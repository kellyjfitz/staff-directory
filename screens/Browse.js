import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head'
import Subtitle from '../components/Subtitle'
import Button from '../components/Button'
import FourLetterRow from '../components/FourLetterRow'
import TwoLetterRow from '../components/TwoLetterRow'

const Browse = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'space-evenly', backgroundColor:'#F5F5F5'}}>
        <View>
        <Head head='Browse Staff Directory'/>
        <Subtitle text='Click a letter to jump to that section (by surname) or scroll down to browse'/>
        </View>
        <View>
          <FourLetterRow letter1='A' letter2='B' letter3='C' letter4='D' />
          <FourLetterRow letter1='E' letter2='F' letter3='G' letter4='H' />
          <FourLetterRow letter1='I' letter2='J' letter3='K' letter4='L' />
          <FourLetterRow letter1='M' letter2='N' letter3='O' letter4='P' />
          <FourLetterRow letter1='Q' letter2='R' letter3='S' letter4='T' />
          <FourLetterRow letter1='U' letter2='V' letter3='W' letter4='X' />
          <TwoLetterRow letter1='Y' letter2='Z' />
    </View>
    </View>

  );
}

export default Browse