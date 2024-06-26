import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { searchBooksByQuery } from '../../api';
import BookListCard from '../../components/BookList/BookListCard';
import { Colors } from './../../constants/Colors';

const SearchResults = () => {
  const navigation = useNavigation();
  const { search, author } = useLocalSearchParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Search results for: ${search || author}`,
      headerStyle: {
        backgroundColor: Colors.BLACK,
      },
      headerTintColor: Colors.PWHITE,
    });

    const fetchBooks = async () => {
      let query = search ? search : `inauthor:${author}`;
      const results = await searchBooksByQuery(query);
      if (results.length === 0) {
        setError('No results found');
      } else {
        setBooks(results);
        setError('');
      }
    };

    fetchBooks();
  }, [search, author]);

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
    backgroundColor: Colors.DARK,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchResults;