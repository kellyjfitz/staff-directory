import 'react-native-gesture-handler';
import styles from './styles.js';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { fetchDataFromAPI, fetchDataFromLocal, updateDataInLocal } from './components/ApiHelpers';
import StackNav from './components/StackNav.js';

function App() {
  useEffect(() => {
    const loadData = async () => {
      try {
        // Attempt to fetch data from JSONBin
        const apiData = await fetchDataFromAPI();
        console.log('Fetched staff data.');
        console.log('Fetched departments data.');
        // console.log(apiData.departments);

        // Store the data locally
        await updateDataInLocal(apiData);
      } catch (error) {
        console.error('Error fetching data from JSONBin:', error);

        // Attempt to load data from local storage if fetching from JSONBin fails
        try {
          const localData = await fetchDataFromLocal();
          const localStaffData = localData.staffData;
          const localDeptData = localData.departments;
          

          if (localStaffData.length && localDeptData.length) {
            console.log('Loaded local staff data.');
            console.log('Loaded local departments data.');
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
          <StackNav />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;
