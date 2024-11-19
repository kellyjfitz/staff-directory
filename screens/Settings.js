import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Brightness from 'expo-brightness'; 
import Head from '../components/Head';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import styles from '../styles.js'; // Use your existing styles

const Settings = () => {
  const [brightness, setBrightness] = useState(1);
  const [textSize, setTextSize] = useState(16);

  useFocusEffect(
    useCallback(() => {
      const fetchSettings = async () => {
        const savedBrightness = await AsyncStorage.getItem('brightness');
        const savedTextSize = await AsyncStorage.getItem('textSize');

        if (savedBrightness) setBrightness(parseFloat(savedBrightness));
        if (savedTextSize) setTextSize(parseInt(savedTextSize, 10));
      };

      fetchSettings();
    }, [])
  );

  const handleBrightnessChange = async (value) => {
    const newBrightness = Math.max(0, Math.min(1, brightness + value));
    setBrightness(newBrightness);
    await Brightness.setBrightnessAsync(newBrightness);
    await AsyncStorage.setItem('brightness', newBrightness.toString());
  };

  const handleTextSizeChange = async (value) => {
    const newTextSize = Math.max(10, Math.min(30, textSize + value));
    setTextSize(newTextSize);
    await AsyncStorage.setItem('textSize', newTextSize.toString());
  };

  return (
    <View style={styles.screen}>
      <Head head="Settings" />
      <View style={{marginBottom:20}}>
        <Subtitle text="Brightness" />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Button text="-" width="20%" style={{ marginHorizontal: 5 }} onPress={() => handleBrightnessChange(-0.1)} />
          <Button text="+" width="20%" style={{ marginHorizontal: 5 }} onPress={() => handleBrightnessChange(0.1)} />
        </View>
      </View>
      <View style={{marginBottom:20}}>
        <Subtitle text="Text Size" />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Button text="-" width="20%" style={{ marginHorizontal: 5 }} onPress={() => handleTextSizeChange(-1)} />
          <Button text="+" width="20%" style={{ marginHorizontal: 5 }} onPress={() => handleTextSizeChange(1)} />
        </View>
      </View>
    </View>
  );
};

export default Settings;
