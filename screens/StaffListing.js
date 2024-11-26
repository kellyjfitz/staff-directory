import React, { useEffect, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import styles, { colours } from '../styles.js';
import { useFocusEffect } from '@react-navigation/native';
import { fetchDataFromAPI, deleteStaffMember } from '../components/ApiHelpers';

const ListingHead = ({ children }) => <Text style={styles.listingHead}>{children}</Text>;
const ListingText = ({ children }) => <Text style={styles.listingBody}>{children}</Text>;

const StaffListing = ({ route, navigation }) => {
  const { item } = route.params;
  const [staff, setStaff] = useState(item);
  const [departmentName, setDepartmentName] = useState('');

  const fetchStaffData = async () => {
    try {
      console.log('Fetching data...');
      const data = await fetchDataFromAPI();
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
      console.error('An error occurred while fetching data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchStaffData();
    }, [item.Id])
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
        onPress={() => navigation.navigate('EditEntry', { item: staff })}
      />
      <Button
        text="Delete"
        onPress={async () => {
          await deleteStaffMember(staff.Id, staff.FirstName, staff.Surname);
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default StaffListing;
