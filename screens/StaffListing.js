import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import React, { useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles, {colours} from '../styles.js';


const ListingHead = ({children}) => {
  return (
      <Text style={styles.listingHead}>{children}</Text>
  );
}
const ListingText = ({children}) => {
  return (
      <Text style={styles.listingBody}>{children}</Text>
  );
}



const StaffListing = ({route, navigation}) => {
 
  const {item} = route.params;

    // 1. State variables to store departments and selected department name
  const [departments, setDepartments] = useState([]);
  const [departmentName, setDepartmentName] = useState('');

  // 2. useEffect to load departments from AsyncStorage
  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const storedDepartments = await AsyncStorage.getItem('departments');
        if (storedDepartments) {
          const parsedDepartments = JSON.parse(storedDepartments);
          setDepartments(parsedDepartments);

          // 3. Find the matching department
          const matchingDepartment = parsedDepartments.find(dept => dept.Id === item.Department);
          if (matchingDepartment) {
            // 4. Set the department name
            setDepartmentName(matchingDepartment.Name);
          }
        }
      } catch (error) {
        console.error('Error loading departments:', error);
      }
    };

    loadDepartments();
  }, [item.Department]); // Ensure this effect runs when item.Department changes

    return (
    <View style={styles.screen}>
      <View style={styles.listing}>
        <Head head={`${item.Surname}, ${item.FirstName}`}/>
        <View>
          <ListingHead>Department:</ListingHead>
          <ListingText>{departmentName}</ListingText>
        </View>
        <View>
          <ListingHead>Address:</ListingHead>
          <ListingText>{item.Street}</ListingText>
          <ListingText>{item.City}</ListingText>
          <ListingText>{item.State}</ListingText>
          <ListingText>{item.ZIP}</ListingText>
          <ListingText>{item.Country}</ListingText>
        </View>
        <View>
          <ListingHead>Phone:</ListingHead>
          <ListingText>{item.Phone}</ListingText>
        </View>
      </View>
      <Button text="Edit" 
        onPress={() => navigation.navigate('HR', { 
        screen: 'EditEntry',
        params: {item }
        })}/>
    </View>
  );
}

export default StaffListing;