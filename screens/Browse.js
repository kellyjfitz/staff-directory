import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity, View, Text, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Head from '../components/Head';
import Subtitle from '../components/Subtitle';
import styles from '../styles.js';
import { BIN_ID, JSONBIN_API_KEY } from '../config';

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY,
      },
    });
    return response.data.record;
  } catch (error) {
    console.error('Unable to fetch data from the API. Device might be offline.', error);
    throw error;
  }
};

const Browse = ({ navigation }) => {
  const [data, setData] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    const loadAndStoreData = async () => {
      try {
        const apiData = await fetchDataFromAPI();
        if (apiData) {
          // Sort the staff data alphabetically by surname
          const sortedData = apiData.staffData.sort((a, b) => a.Surname.localeCompare(b.Surname));
          await AsyncStorage.setItem('staffData', JSON.stringify(apiData));
          setData(sortedData); // Set the sorted data
        }
      } catch (error) {
        console.error('Error loading data from API and storing in local storage:', error);
      }
    };

    loadAndStoreData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('StaffListing', { item })}>
      <View style={styles.directoryItem}>
        <Text style={styles.directoryName}>{item.Surname}, {item.FirstName}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFlatListHeader = () => (
    <View>
      <Head head='Browse Staff Directory' />
      <Subtitle text='Listings are sorted alphabetically by surname.
      Click on a name to see full details.' />
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        ref={flatListRef}
        data={data}
        ListHeaderComponent={renderFlatListHeader}
        renderItem={renderItem}
        keyExtractor={item => `item-${item.Id}`}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

export default Browse;
