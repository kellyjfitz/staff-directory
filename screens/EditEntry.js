import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import styles, { colours } from '../styles.js';
import React, { useState } from 'react';
import DepartmentDropDown from '../components/DepartmentDropDown.js';
import axios from 'axios';  // Import axios for making API calls
import { BIN_ID, JSONBIN_API_KEY } from '../config'; // Import the config

const EditEntry = ({ route, navigation }) => {
  const { item } = route.params;
  const [id, setId] = useState(item.Id);
  const [firstName, setFirstName] = useState(item.FirstName);
  const [surname, setSurname] = useState(item.Surname);
  const [phone, setPhone] = useState(item.Phone);
  const [street, setStreet] = useState(item.Street);
  const [city, setCity] = useState(item.City);
  const [state, setState] = useState(item.State);
  const [zip, setZip] = useState(item.ZIP);
  const [country, setCountry] = useState(item.Country);
  const [department, setDepartment] = useState(item.Department);

  const handleDepartmentChange = (newDepartment) => {
    setDepartment(newDepartment);
  };

  const handleSave = async () => {
    try {
      // Fetch current data from the JSON bin
      const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
          'X-Master-Key': JSONBIN_API_KEY,
        },
      });

      const currentData = response.data.record;
      const staffData = currentData.staffData;

      // Find and update the staff entry
      const updatedStaffData = staffData.map((staff) => {
        if (staff.Id === id) {
          return {
            ...staff,
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
        }
        return staff;
      });

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
        console.log('Entry updated successfully');
        navigation.goBack(); // Navigate back or provide feedback to the user
      }
    } catch (error) {
      console.error('Error updating entry:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Head head='Edit Entry' />
        <InputWithLabel label='First name' value={firstName} onChangeText={text => setFirstName(text)} />
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

export default EditEntry;
