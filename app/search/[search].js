import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { searchBooksByQuery } from '../../api';
import BookListCard from '../../components/BookList/BookListCard';

const SearchResults = () => {
  const navigation = useNavigation();
  const { search } = useLocalSearchParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Search results for: ${search}`,
    });

    const fetchBooks = async () => {
      const results = await searchBooksByQuery(search);
      if (results.length === 0) {
        setError('No results found');
      } else {
        setBooks(results);
        setError('');
      }
    };

    fetchBooks();
  }, [search]);

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
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchResults;
