import { Text, View, StyleSheet} from 'react-native';
import styles, {colours} from '../styles.js';


const Subtitle = props => {
  return (
      <Text style={styles.subtitle}>{props.text}</Text>
  );
}

export default Subtitle