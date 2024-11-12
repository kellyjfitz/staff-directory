import { View} from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import Subtitle from '../components/Subtitle'
import styles, {colours} from '../styles.js';

const IncorrectLogin = ({navigation}) => {
  return (
    <View style={styles.screen}>
        <Head head="Incorrect Login"/>
        <Subtitle text={"The login was unsuccessful. " +
        "Please contact the IT Service Desk on 1800 000 000 " +
        "to reset your password."} />
    </View>
  );
}

export default IncorrectLogin