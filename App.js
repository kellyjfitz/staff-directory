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
import {BIN_ID, JSONBIN_API_KEY} from './config.js'

const Drawer = createDrawerNavigator();

function App() {
  useEffect(() => {
    const loadData = async () => {
      try {
        // Attempt to fetch data from JSONBin
      //COMMENTED THIS OUT TO PREVENT NEW REQUESTS WHILE DEVELOPING
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
      } catch (error) {
        console.error('Error fetching data from JSONBin:', error);

        //Attempt to load data from local storage if fetching from JSONBin fails
        try {
          const localStaffData = await AsyncStorage.getItem('staffData');
          const localDeptData = await AsyncStorage.getItem('departments');

          if (localStaffData && localDeptData) {
            console.log('Loaded local staff data:', JSON.parse(localStaffData));
            console.log('Loaded local departments data:', JSON.parse(localDeptData));
          } else {
            console.error('No local data available.');
          }
        } catch (localError) {
          console.error('Error loading local data:', localError);
        }
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
