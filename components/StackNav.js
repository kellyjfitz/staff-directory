import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HRLogin from '../screens/HRLogin';
import LoggedIn from '../screens/LoggedIn';
import EditEntry from '../screens/EditEntry';
import StaffListing from '../screens/StaffListing';
import { Header, Logo, LogoLeft, LogoRight } from './Header'; // Import the Header components
import styles from '../styles.js';

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator
      initialRouteName="HRLogin"  
      screenOptions={({ navigation }) => ({
      headerShown: true,
      headerTitle: () => <Logo />,
      headerTitleAlign: 'center',
      headerLeft: () => <LogoLeft navigation={navigation} />,
      headerRight: () => <LogoRight navigation={navigation} />,
      headerStyle: styles.headerStyle,
    })}
  >
    <Stack.Screen name="HRLogin" component={HRLogin} />
    <Stack.Screen name="LoggedIn" component={LoggedIn} />
    <Stack.Screen name="StaffListing" component={StaffListing} />
    <Stack.Screen name="EditEntry" component={EditEntry} />
  </Stack.Navigator>
);

export default StackNav;
