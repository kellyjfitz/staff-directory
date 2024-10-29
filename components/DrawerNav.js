import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import AddEntry from '../screens/AddEntry'
import Browse from '../screens/Browse'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

function LogoRight({navigation}) {
  return (
    <Pressable onPress={() => navigation.navigate('Home')}>
    <Image
      style={styles.logo}
      source={require('../assets/home_icon.png')}
    />
    </Pressable>
  );
}

function LogoLeft({ navigation }) {
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Image
        style={{height:30, width:30, margin:15}}
        source={require('../assets/menu.png')}
        testID="menuIcon"
      />
    </Pressable>
  );

}

function Logo() {
  return (
    //<View style={styles.navLogo}>
    <Image
      source={require('../assets/roi_logo.png')}
      style={{height: 80, aspectRatio:1, resizeMode:'contain', margin:10, alignContent:'center'}}
    />
    //</View>
  );
}



const DrawerNav = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerStyle: {
          backgroundColor: '#941a1d',
          width: '50%'
        },
        drawerActiveBackgroundColor: '#cb6d4f',
        drawerLabelStyle:{
          color:'white',
          fontSize:20,
        },
        headerStyle: {
          backgroundColor: '#F5F5F5',
          //height: 70,
        },
        headerTitle: (props) => (
          <Logo />
        ),
        headerTitleAlign: 'center',
        headerLeft: (props) => (
          <LogoLeft navigation={navigation}/>
        ),
        headerRight: (props) => (
          <LogoRight navigation={navigation} />
        ),
      })}
    >
      <Drawer.Screen name="Browse" component={Browse} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Add" component={AddEntry} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({

navLogo: {
    flex:1,
    flexDirection: 'row', // Set row direction
    justifyContent: 'center', // Space between elements
    alignItems: 'center', // Center items vertically
    height:'80%'
    //width: '100%', // Full width of parent
  },
  logo: {
    margin:17.5,
    width: 35,
    height: 35,
  },
});

export default DrawerNav
