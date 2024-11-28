import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BIN_ID, JSONBIN_API_KEY } from '../config';
import showAlert from './Alert.js';


// Fetch data from API
export const fetchDataFromAPI = async () => {
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

// Fetch data from local storage
export const fetchDataFromLocal = async () => {
  try {
    const jsonData = await AsyncStorage.getItem('staffData');
    return jsonData ? JSON.parse(jsonData) : { staffData: [], departments: [] };
  } catch (error) {
    console.error('Error fetching data from local storage:', error);
    throw error;
  }
};

// Update data in local storage
export const updateDataInLocal = async (data) => {
  try {
    await AsyncStorage.setItem('staffData', JSON.stringify(data.staffData));
    await AsyncStorage.setItem('departments', JSON.stringify(data.departments));
    console.log('Data updated in local storage successfully');
  } catch (error) {
    console.error('Error updating data in local storage:', error);
    throw error;
  }
};

export const loadData = async () => {
  try {
    // Attempt to fetch data from jsonbin
    const apiData = await fetchDataFromAPI();
    console.log('Fetched staff data.');
    console.log('Fetched departments data.');
  
    // Store the data locally
    await updateDataInLocal(apiData);

    return apiData;

  } catch (error) {
    console.error('Error fetching data from JSONBin:', error);

    // Attempt to load data from local storage if fetching from jsonbin fails
    try {
      const localData = await fetchDataFromLocal();
      const localStaffData = localData.staffData;
      const localDeptData = localData.departments;
      
      //check that there is actually something in the local data
      if (localStaffData.length && localDeptData.length) {
        console.log('Loaded local staff data.');
        console.log('Loaded local departments data.');
        return localData;
      } else {
        console.error('No local data available.');
      }
    } catch (localError) {
      console.error('Error loading local data:', localError);
    }
  }
};


// Delete a staff member in local storage and update the API
export const deleteStaffMember = async (staffId, firstName, surname) => {
  try {
    const data = await fetchDataFromLocal();
    data.staffData = data.staffData.filter(staffMember => staffMember.Id !== staffId);
    await updateDataInLocal(data);
    await axios.put(`https://api.jsonbin.io/v3/b/${BIN_ID}`, 
      { 
        ...data 
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSONBIN_API_KEY,
        },
      }
    );
    console.log(`Staff member with ID ${staffId} deleted locally and API updated.`);
    showAlert("Success", `Entry has been deleted for ${firstName} ${surname}`);
  } catch (error) {
    console.error('An error occurred while deleting staff member locally and updating API:', error);
    showAlert("Problem", `Something went wrong and the entry was not deleted for ${firstName} ${surname}`);
    throw error;
  }
}

  export const updateDataInJsonBin = async (updatedData) => { 
    try { 
      const response = await axios.put(`https://api.jsonbin.io/v3/b/${BIN_ID}`, updatedData, { 
        headers: { 
          'Content-Type': 'application/json', 
          'X-Master-Key': JSONBIN_API_KEY, 
        }, 
      }); 
      return response; 
    } catch (error) { 
      console.error('Error updating data in JSONBin:', error); 
      
  }
};
