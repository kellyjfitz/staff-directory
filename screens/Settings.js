import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Head from '../components/Head';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import styles from '../styles.js'; // Use your existing styles


const SettingsOption = () => {
    return(
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Button text="-" width="20%" style={{ marginHorizontal: 5 }} />
        <Button text="+" width="20%" style={{ marginHorizontal: 5 }} />
        </View>
    )
}

const Settings = () => {
 
  return (
    <View style={styles.screen}>
      <Head head="Settings" />
      <View style={{ marginBottom: 20 }}>
        <Subtitle text="Adjust Brightness" />
        <SettingsOption />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Subtitle text="Adjust Text Size" />
        <SettingsOption />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Subtitle text="Adjust Volume" />
        <SettingsOption />
      </View>
    </View>
  );
};

export default Settings;
