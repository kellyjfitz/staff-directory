import { Text} from 'react-native';
import styles from '../styles.js';


const Subtitle = props => {
  return (
      <Text style={styles.subtitle}>{props.text}</Text>
  );
}

export default Subtitle