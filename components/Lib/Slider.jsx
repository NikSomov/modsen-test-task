import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../constants/Colors';

const Slider = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      const getRecentBooks = async () => {
        try {
          const recentBooks = await AsyncStorage.getItem('recentBooks');
          if (recentBooks) {
            setBooks(JSON.parse(recentBooks));
          }
        } catch (error) {
          setError('Failed to fetch recent books');
        }
      };

      getRecentBooks();
    }, [])
  );

  const handleBookPress = (id) => {
    router.push(`/bookid/${id}`);
  };

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderTitle}>Recently Viewed Books</Text>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={books}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleBookPress(item.id)}>
              <View style={styles.bookItem}>
                <Image 
                  source={{ uri: item.thumbnail }}
                  style={styles.bookImage}
                />
                <Text style={styles.bookTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sliderTitle: {
    fontSize: 16,
    fontFamily: 'comfortaa-b',
    marginBottom: 10,
    color: Colors.PWHITE,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  bookItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  bookImage: {
    width: 150,
    height: 225,
  },
  bookTitle: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'comfortaa-r',
    textAlign: 'center',
    color: Colors.PWHITE,
  },
});

export default Slider;
