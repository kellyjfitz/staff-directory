import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Head from '../components/Head';
import Subtitle from '../components/Subtitle';
import styles, { colours } from '../styles.js';

const organizeData = (data) => {
  const itemsMap = new Map();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Initialize the map with empty arrays for each letter
  alphabet.forEach((letter) => {
    itemsMap.set(letter, []);
  });

  // Populate the map with data items
  data.forEach((item) => {
    const surname = item.Surname;
    const initial = surname ? surname[0].toUpperCase() : '';
    if (itemsMap.has(initial)) {
      itemsMap.get(initial).push({ type: 'item', ...item, key: `item-${item.Id}` });
    }
  });

  // Convert the map to the desired format
  const items = [];
  itemsMap.forEach((value, key) => {
    items.push({ type: 'header', letter: key, key: `header-${key}` });
    items.push(...value);
  });

  return items;
};

const Browse = ({ navigation }) => {
  const [data, setData] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('staffData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const organizedData = organizeData(parsedData);
          setData(organizedData);
        }
      } catch (error) {
        console.error('Error loading stored data:', error);
      }
    };

    loadStoredData();
  }, []);

  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return (
        <View style={listStyles.sectionHeader}>
          <Text style={listStyles.sectionHeaderText}>{item.letter}</Text>
        </View>
      );
    }

    return (
      <TouchableOpacity onPress={() => navigation.navigate('HR', {
        screen: 'StaffListing',
        params: { item } // Make sure 'item' is correctly passed
      })}>
        <View style={listStyles.item}>
          <Text style={listStyles.name}>{item.Surname}, {item.FirstName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFlatListHeader = () => (
    <View>
      <Head head='Browse Staff Directory' />
      <Subtitle text='Listings are sorted alphabetically by surname' />
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        ref={flatListRef}
        data={data}
        ListHeaderComponent={renderFlatListHeader}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

const listStyles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: colours.midGrey,
    padding: 10,
    marginTop: 20,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.white,
    textAlign: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Browse;
