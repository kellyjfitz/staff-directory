// Only import react-native-gesture-handler on native platforms
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

function App() {
  useEffect(() => {
    const loadData = async () => {
      try {
        // Attempt to fetch data from the API
        const response = await axios.get('http://10.0.2.2:3000/api/staff');
        const data = response.data;
        console.log('Fetched staff data:', data);

        // Store the data locally
        await AsyncStorage.setItem('staffData', JSON.stringify(data));

        // You can also fetch departments and store them similarly
        const deptResponse = await axios.get('http://10.0.2.2:3000/api/departments');

        const deptData = deptResponse.data; console.log('Fetched departments data:', deptData);

        await AsyncStorage.setItem('departments', JSON.stringify(deptResponse.data));
      } catch (error) {
        console.error('Error fetching data from API:', error);
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
