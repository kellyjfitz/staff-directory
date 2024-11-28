import 'react-native-gesture-handler';
import styles from './styles.js';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { loadData } from './components/ApiHelpers';
import StackNav from './components/StackNav.js';

function App() {
  useEffect(() => {

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
