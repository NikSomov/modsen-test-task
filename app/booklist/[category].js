import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { searchBooksByCategory } from '../../api';
import BookListCard from '../../components/BookList/BookListCard';
import { Colors } from './../../constants/Colors';
const BookList = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: category,
      headerStyle: {
        backgroundColor: Colors.BLACK,
      },
      headerTintColor: Colors.PWHITE,
    });

    const fetchBooks = async () => {
      const results = await searchBooksByCategory(category);
      if (results.length === 0) {
        setError('Failed to fetch books');
      } else {
        setBooks(results);
        setError('');
      }
    };

    fetchBooks();
  }, [category]);

  const renderItem = ({ item }) => <BookListCard book={item} />;

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:Colors.DARK,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BookList;
