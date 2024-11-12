import { Text, View, StyleSheet} from 'react-native';
import styles, {colours} from '../styles.js';


const Listing = props => {
  return (
    <View>
      <Head>{props.name}</Head>
    </View>
  );
}

export default Listing