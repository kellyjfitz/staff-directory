import { Text, Pressable } from 'react-native';
import styles from '../styles.js';

const Button = props => {
  return (
    <Pressable style={[styles.button, { width: props.width || '100%' }, props.style]}
    onPress={props.onPress}
    >
      <Text style={styles.btnText}>{props.text}</Text>
    </Pressable>
  );
}

export default Button