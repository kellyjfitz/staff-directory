import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import styles, { colours } from '../styles.js'; // Make sure this path is correct

const LogoRight = ({ navigation }) => (
  <Pressable onPress={() => navigation.navigate('Home')}>
    <Image
      style={styles.logo}
      source={require('../assets/home_icon.png')}
    />
  </Pressable>
);

const LogoLeft = ({ navigation }) => (
  <Pressable onPress={() => navigation.openDrawer()}>
    <Image
      style={{ height: 30, width: 30, margin: 15 }}
      source={require('../assets/menu.png')}
      testID="menuIcon"
    />
  </Pressable>
);

const Logo = () => (
  <Image
    source={require('../assets/roi_logo.png')}
    style={{ height: 80, aspectRatio: 1, resizeMode: 'contain', margin: 10, alignContent: 'center' }}
  />
);

const Header = ({ navigation }) => (
  <View style={headerStyles.headerContainer}>
    <Logo />
    <LogoLeft navigation={navigation} />
    <LogoRight navigation={navigation} />
  </View>
);

const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colours.headerBackground,
  },
});

export { Header, Logo, LogoLeft, LogoRight };
