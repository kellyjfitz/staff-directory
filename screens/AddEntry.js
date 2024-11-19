import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import styles, { colours } from '../styles.js';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API calls
import { BIN_ID, JSONBIN_API_KEY } from '../config'; // Import the config
import DepartmentDropDown from '../components/DepartmentDropDown.js';

const AddEntry = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');

  const handleDepartmentChange = (newDepartment) => {
    setDepartment(newDepartment);
  };

  const validateFields = () => {
    if (
      !firstName || !surname || !phone || !street || !city || 
      !state || !zip || !country || !department
    ) {
      console.log('All fields must be filled out before saving.');
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      // Fetch current data from the JSON bin
      const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
          'X-Master-Key': JSONBIN_API_KEY,
        },
      });

      const currentData = response.data.record;
      const staffData = currentData.staffData;

      // Determine the highest ID and increment by 1
      const highestId = Math.max(...staffData.map(staff => staff.Id));
      const newId = highestId + 1;

      // Create the new staff entry
      const newStaffEntry = {
        Id: newId,
        FirstName: firstName,
        Surname: surname,
        Phone: phone,
        Street: street,
        City: city,
        State: state,
        ZIP: zip,
        Country: country,
        Department: department,
      };

      // Add the new entry to the staff data
      const updatedStaffData = [...staffData, newStaffEntry];

      // Prepare the updated data
      const updatedData = {
        ...currentData,
        staffData: updatedStaffData,
      };

      // Send the updated data back to the JSON bin
      const updateResponse = await axios.put(`https://api.jsonbin.io/v3/b/${BIN_ID}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSONBIN_API_KEY,
        },
      });

      if (updateResponse.status === 200) {
        console.log('New entry added successfully');
        navigation.goBack(); // Navigate back or provide feedback to the user
      }
    } catch (error) {
      console.error('Error adding new entry:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Head head='Add New Entry' />
        <InputWithLabel label='First name' placeholder='Enter first name' value={firstName} onChangeText={text => setFirstName(text)} />
        <InputWithLabel label='Surname' placeholder='Enter surname' value={surname} onChangeText={text => setSurname(text)} />
        <DepartmentDropDown
          initialDepartment={department}
          onDepartmentChange={handleDepartmentChange}
        />
        <InputWithLabel label='Phone' placeholder='Enter phone' value={phone} onChangeText={text => setPhone(text)} />
        <InputWithLabel label='Address' placeholder='Enter address' value={street} onChangeText={text => setStreet(text)} />
        <InputWithLabel label='City' placeholder='Enter city' value={city} onChangeText={text => setCity(text)} />
        <InputWithLabel label='State' placeholder='Enter state' value={state} onChangeText={text => setState(text)} />
        <InputWithLabel label='ZIP' placeholder='Enter zip' value={zip} onChangeText={text => setZip(text)} />
        <InputWithLabel label='Country' placeholder='Enter country' value={country} onChangeText={text => setCountry(text)} />
        <Button text='Save entry' onPress={handleSave} />
        <Button text='Cancel' onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

export default AddEntry;
