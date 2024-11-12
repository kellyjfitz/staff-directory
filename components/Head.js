import { Text, View} from 'react-native';
import styles, {colours} from '../styles.js';

const Head = props => {
  return (
      <Text style={styles.head}>{props.head}</Text>
  );
}

export default Head