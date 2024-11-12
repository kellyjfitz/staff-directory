import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Head from '../components/Head';
import Subtitle from '../components/Subtitle';
import LetterRow from '../components/LetterRow';
import styles, { colours } from '../styles.js';

const organizeData = (data) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const sections = alphabet.map((letter) => ({
    title: letter,
    data: data.filter((item) => item.Name.split(', ')[1][0].toUpperCase() === letter),
  }));
  return sections.filter(section => section.data.length > 0); // Exclude empty sections
};

const Browse = ({ navigation }) => {
  const [sections, setSections] = useState([]);
  const sectionListRef = useRef(null);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('staffData');
        console.log('Loaded stored data:', storedData);
        if (storedData) {
          
          const parsedData = JSON.parse(storedData);
          console.log("after the parse");
          const organizedSections = organizeData(parsedData);
          console.log("after orgsections");
          setSections(organizedSections);
        }
      } catch (error) {
        console.error('Error loading stored data:', error);
      }
    };

    loadStoredData();
  }, []);

  const handlePress = (letter) => {
    const sectionIndex = sections.findIndex((section) => section.title === letter);
    if (sectionIndex !== -1) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
      });
    }
  };

  const renderLetterRows = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const rows = [];
    for (let i = 0; i < 6; i++) {
      const letters = alphabet.slice(i * 4, i * 4 + 4);
      rows.push(<LetterRow key={i} letters={letters} onLetterPress={handlePress} />);
    }

    // Handle the last row if there are remaining letters 
    const remainingLetters = alphabet.slice(Math.floor(alphabet.length / 4) * 4); 
    if (remainingLetters.length > 0) { 
      rows.push(<LetterRow key="last" letters={remainingLetters} onLetterPress={handlePress} />);
    }

    return rows;
  };

  return (
    <View style={styles.screen}>
      <View>
        <Head head='Browse Staff Directory' />
        <Subtitle text='Click a letter to jump to that section (by surname) or scroll down to browse' />
      </View>
      <View>
        {renderLetterRows()}
      </View>
      <SectionList
        ref={sectionListRef}
        sections={sections}
        keyExtractor={(item) => item.Id.toString()}
        renderItem={({ item }) => (
          <View style={listStyles.item}>
            <Text style={listStyles.name}>{item.Name}</Text>
            <Text>{item.Phone}</Text>
            <Text>{item.Department}</Text>
            <Text>{`${item.Address.Street}, ${item.Address.City}, ${item.Address.State}, ${item.Address.ZIP}, ${item.Address.Country}`}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={listStyles.sectionHeader}>
            <Text style={listStyles.sectionHeaderText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default Browse;
