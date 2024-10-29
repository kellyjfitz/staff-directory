import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Head from '../components/Head'
import Button from '../components/Button'
import InputWithLabel from '../components/InputWithLabel'

const AddEntry = () => {
  return (
    <ScrollView>
      <View>
        <Head head='Add New Directory Entry'/>
        <InputWithLabel label='First name' placeholder='Enter first name' />
        <InputWithLabel label='Surname' placeholder='Enter surname' />
        <InputWithLabel label='Department' placeholder='Enter department' />
        <InputWithLabel label='Phone' placeholder='Enter phone' />
        <InputWithLabel label='Address' placeholder='Enter address' />
        <InputWithLabel label='City' placeholder='Enter city' />
        <InputWithLabel label='State' placeholder='Enter state' />
        <InputWithLabel label='ZIP' placeholder='Enter zip' />
        <InputWithLabel label='Country' placeholder='Enter country' />
        <Button text='Save entry' />
      </View>
    </ScrollView>
  );
}

export default AddEntry