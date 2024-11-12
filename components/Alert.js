import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

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