import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Pressable } from 'react-native';
import EditEntry from '../screens/EditEntry';
import StaffListing from '../screens/StaffListing';
import HomeScreen from '../screens/HomeScreen';
import AddEntry from '../screens/AddEntry';
import Browse from '../screens/Browse';
import Settings from '../screens/Settings';
import styles, {colours} from '../styles.js';

const Stack = createStackNavigator();

const LogoRight = ({ navigation }) => (
  <Pressable onPress={() => navigation.navigate('Home')}>
    <Image
      style={{ width: 110, aspectRatio: 1, resizeMode: 'contain', margin: 5}}
      source={require('../assets/roi_logo.png')}
    />
  </Pressable>
);


const StackNav = () => (
  <Stack.Navigator
      screenOptions={({ navigation }) => ({
      headerShown: true,
      headerTitle: "",
      headerRight: () => <LogoRight navigation={navigation} />,
      headerStyle: styles.headerStyle,
      headerTintColor: colours.red,
      headerBackImage: () => ( <Image source={require('../assets/back_arrow.png')} 
      style={{ width: 30, height: 30 }} /> ),
    })}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Browse" component={Browse} />
    <Stack.Screen name="AddEntry" component={AddEntry} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="StaffListing" component={StaffListing} />
    <Stack.Screen name="EditEntry" component={EditEntry} />
  </Stack.Navigator>
);

export default StackNav;
