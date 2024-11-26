import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import styles from '../styles.js';

const DepartmentDropDown = ({ initialDepartment, onDepartmentChange }) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment ? initialDepartment + 1 : '');

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const storedDepartments = await AsyncStorage.getItem('departments');
        if (storedDepartments) {
          const parsedDepartments = JSON.parse(storedDepartments);
          console.log('Loaded departments:', parsedDepartments); // Log loaded departments
          setDepartments(parsedDepartments);
        }
        else { console.log('No departments found in AsyncStorage.'); }
      } catch (error) {
        console.error('Error loading departments:', error);
      }
    };

    loadDepartments();
  }, []);

  useEffect(() => {
    setSelectedDepartment(initialDepartment + 1);
  }, [initialDepartment]);

  const departmentOptions = departments.map(department => ({
    label: department.Name,
    value: department.Id + 1, // Add 1 to each Id
  }));

  const handleValueChange = (itemValue) => {
    console.log('Selected value:', itemValue); // Log selected value
    setSelectedDepartment(itemValue);
    onDepartmentChange(itemValue - 1); // Subtract 1 to match original Id
  };

  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>Department</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={{ flex: 1 }}
          selectedValue={selectedDepartment}
          onValueChange={handleValueChange}
        >
          {departmentOptions.map(option => (
            <Picker.Item label={option.label} value={option.value} key={option.value} style={styles.picker} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default DepartmentDropDown;
