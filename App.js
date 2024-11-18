import 'react-native-gesture-handler';
import styles, { colours } from './styles.js';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNav from './components/DrawerNav';
import React, { useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const BIN_ID = '6735c48ae41b4d34e454373b'; // Replace with your actual bin ID
const JSONBIN_API_KEY = '$2a$10$JuHnKf.O/QJvIOo7CNaDdORDHkzK9t6EKgw6vtXKRFBsNg0gcKcdu'; // Replace with your JSONBin API key

function App() {
  useEffect(() => {
    const loadData = async () => {
      try {
        // Clear old data (optional, only if you want to reset storage)
        await AsyncStorage.removeItem('staffData');
        await AsyncStorage.removeItem('departments');

        // Attempt to load data from local storage
        const localStaffData = await AsyncStorage.getItem('staffData');
        const localDeptData = await AsyncStorage.getItem('departments');

        if (localStaffData && localDeptData) {
          console.log('Loaded local staff data:', JSON.parse(localStaffData));
          console.log('Loaded local departments data:', JSON.parse(localDeptData));
        } else {
          // Fetch data from JSONBin if local data is not available
          const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: {
              'X-Master-Key': JSONBIN_API_KEY,
            },
          });
          const data = response.data.record.staffData;
          const deptData = response.data.record.departments;
          console.log('Fetched staff data:', data);
          console.log('Fetched departments data:', deptData);

          // Store the data locally
          await AsyncStorage.setItem('staffData', JSON.stringify(data));
          await AsyncStorage.setItem('departments', JSON.stringify(deptData));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.background}>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;
