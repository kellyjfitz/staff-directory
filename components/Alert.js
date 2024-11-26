import { Alert} from 'react-native';

const showAlert = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: "OK",
            }
        ],
        { cancelable: true }
    );
};

export default showAlert;