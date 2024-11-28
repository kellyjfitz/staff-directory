import { View, ScrollView} from 'react-native';
import Head from '../components/Head';
import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import styles from '../styles.js';
import React, { useState } from 'react';
import axios from 'axios'; 
// This is the bin id and key for accessing the data
import { BIN_ID, JSONBIN_API_KEY } from '../config'; 
import DepartmentDropDown from '../components/DepartmentDropDown.js';
import showAlert from '../components/Alert.js';
import { loadData, updateDataInJsonBin } from '../components/ApiHelpers';

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
      showAlert("Problem", "You must fill out all fields");
      
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const data = await loadData();
      const staffData = data.staffData;

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
      const updateResponse = await updateDataInJsonBin(updatedData);

      if (updateResponse.status === 200) {
        console.log('New entry added successfully');
        showAlert("Success", "New entry added");
        navigation.navigate('Browse');
      }
    } catch (error) {
      console.error('Error adding new entry:', error);
      showAlert("Error", "There was a problem and the entry was not created.");
     
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
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
