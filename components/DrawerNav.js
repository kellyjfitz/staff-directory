import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AddEntry from '../screens/AddEntry';
import Browse from '../screens/Browse';
import StackNav from './StackNav';
import Settings from '../screens/Settings';
import { Header, Logo, LogoLeft, LogoRight } from './Header'; // Import the Header components
import { useWindowDimensions } from 'react-native';
import styles, { colours } from '../styles.js';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: colours.burntOrange,
        drawerLabelStyle: styles.drawerLabelStyle,
        headerStyle: styles.headerStyle,
        headerTitle: () => <Logo />,
        headerTitleAlign: 'center',
        headerLeft: () => <LogoLeft navigation={navigation} />,
        headerRight: () => <LogoRight navigation={navigation} />,
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Browse" component={Browse} />
      <Drawer.Screen name="Add" component={AddEntry} />
      <Drawer.Screen name="HR" component={StackNav} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
