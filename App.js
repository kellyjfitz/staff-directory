// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNav from './components/DrawerNav';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <SafeAreaView style={{flex:1, padding:20,backgroundColor: '#F5F5F5'}}>
    <NavigationContainer>
     <DrawerNav />
    </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;