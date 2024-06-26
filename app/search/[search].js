import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import BookListCard from '../../components/BookList/BookListCard';
import { searchBooksByQuery } from '../../api';
import { Colors } from './../../constants/Colors';

const SearchResults = () => {
  const navigation = useNavigation();
  const { search, author } = useLocalSearchParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isEndReached, setIsEndReached] = useState(false);

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
      setLoading(true);
      let query = search ? search : `inauthor:${author}`;
      const results = await searchBooksByQuery(query, page * 30);
      if (results.length === 0) {
        setError(page === 0 ? 'No results found' : '');
        setIsEndReached(true);
      } else {
        setBooks((prevBooks) => [...prevBooks, ...results]);
        setError('');
      }
      setLoading(false);
    };

    fetchBooks();
  }, [search, author, page]);

  const loadMoreBooks = () => {
    if (!loading && !isEndReached) {
      setPage((prevPage) => prevPage + 1);
    }
  };

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
          onEndReached={loadMoreBooks}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && <ActivityIndicator size="large" color={Colors.PWHITE} />}
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