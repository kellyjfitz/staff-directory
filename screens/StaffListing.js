import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import React, { useEffect, useState, useCallback } from 'react';
import styles, { colours } from '../styles.js';
import axios from 'axios';
import { BIN_ID, JSONBIN_API_KEY } from '../config';
import { useFocusEffect } from '@react-navigation/native';

const ListingHead = ({ children }) => {
  return <Text style={styles.listingHead}>{children}</Text>;
};

const ListingText = ({ children }) => {
  return <Text style={styles.listingBody}>{children}</Text>;
};

const StaffListing = ({ route, navigation }) => {
  const { item } = route.params;
  const [staff, setStaff] = useState(item);
  const [departmentName, setDepartmentName] = useState('');

  const fetchData = async () => {
    try {
      console.log('Fetching data...'); // Debug log

      const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
          'X-Master-Key': JSONBIN_API_KEY,
        },
      });

      const data = response.data.record;
      const staffData = data.staffData;
      const departmentsData = data.departments;

      const matchingStaff = staffData.find(staffMember => staffMember.Id === item.Id);
      if (matchingStaff) {
        setStaff(matchingStaff);
      }

      const matchingDepartment = departmentsData.find(dept => dept.Id === matchingStaff.Department);
      if (matchingDepartment) {
        setDepartmentName(matchingDepartment.Name);
      }
    } catch (error) {
      console.error('Unable to fetch data from the API. Device might be offline.', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [item.Id]) // Dependency array includes item.Id
  );

  return (
    <View style={styles.screen}>
      <View style={styles.listing}>
        <Head head={`${staff.Surname}, ${staff.FirstName}`} />
        <View>
          <ListingHead>Department:</ListingHead>
          <ListingText>{departmentName}</ListingText>
        </View>
        <View>
          <ListingHead>Address:</ListingHead>
          <ListingText>{staff.Street}</ListingText>
          <ListingText>{staff.City}</ListingText>
          <ListingText>{staff.State}</ListingText>
          <ListingText>{staff.ZIP}</ListingText>
          <ListingText>{staff.Country}</ListingText>
        </View>
        <View>
          <ListingHead>Phone:</ListingHead>
          <ListingText>{staff.Phone}</ListingText>
        </View>
      </View>
      <Button
        text="Edit"
        onPress={() =>
          navigation.navigate('HR', {
            screen: 'EditEntry',
            params: { item: staff },
          })
        }
      />
    </View>
  );
};

export default StaffListing;
