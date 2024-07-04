import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import BookListCard from '../../components/BookList/BookListCard';
import { searchBooksByCategory } from '../../api';
import { Colors } from './../../constants/Colors';
import { Octicons } from '@expo/vector-icons';

const BookList = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('relevance');
  const [page, setPage] = useState(0);
  const [isEndReached, setIsEndReached] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: category,
      headerStyle: {
        backgroundColor: Colors.BLACK,
      },
      headerTintColor: Colors.PWHITE,
      headerRight: () => (
        <TouchableOpacity onPress={toggleSortOrder} style={styles.filterButton}>
          <Octicons name={sortOrder === 'relevance' ? "flame" : "calendar"} size={24} color={Colors.PWHITE} />
        </TouchableOpacity>
      ),
    });

    fetchBooks(0, true); // Fetch books with initial page 0 and reset
  }, [category, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'relevance' ? 'newest' : 'relevance'));
  };

  const fetchBooks = async (startIndex = 0, reset = false) => {
    setLoading(true);
    const { books: newBooks, totalItems } = await searchBooksByCategory(category, startIndex, 30, sortOrder);
    if (newBooks.length === 0) {
      if (reset) setError('No results found');
      setIsEndReached(true);
    } else {
      setBooks(prevBooks => (reset ? newBooks : [...prevBooks, ...newBooks]));
      setTotalResults(totalItems);
      setError('');
    }
    setLoading(false);
  };

  const loadMoreBooks = () => {
    if (!loading && !isEndReached) {
      const newPage = page + 1;
      setPage(newPage);
      fetchBooks(newPage * 30);
    }
  };

  const renderItem = ({ item }) => <BookListCard book={item} />;

  return (
    <View style={styles.container}>
      {loading && page === 0 ? (
        <ActivityIndicator size="large" color={Colors.PWHITE} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          <Text style={styles.resultCount}>Found {totalResults} results</Text>
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={loadMoreBooks}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <ActivityIndicator size="large" color={Colors.PWHITE} /> : null}
          />
        </>
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
  filterButton: {
    marginRight: 10,
  },
  resultCount: {
    fontSize: 16,
    color: Colors.PWHITE,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default BookList;