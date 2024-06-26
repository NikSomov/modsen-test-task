import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { useNavigation, useLocalSearchParams, useRouter } from 'expo-router';
import { getBookById } from '../../api';
import { Colors } from './../../constants/Colors';

const BookDetails = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { bookid } = useLocalSearchParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Book Details',
      headerStyle: {
        backgroundColor: Colors.BLACK,
      },
      headerTintColor: Colors.PWHITE,
    });

    const fetchBookData = async () => {
      try {
        const data = await getBookById(bookid);
        setBook(data);
      } catch (error) {
        setError('Error fetching book details');
      }
    };

    fetchBookData();
  }, [bookid]);

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!book) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  const { title, authors, description, publishedDate, imageLinks } = book.volumeInfo;

  const handleExploreAuthor = () => {
    if (authors && authors.length > 0) {
      router.push(`/search/${authors[0]}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: Colors.DARK }}>
      <Image source={{ uri: imageLinks?.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{authors?.join(', ')}</Text>
      <Button title="Explore Author" onPress={handleExploreAuthor} />
      <Text style={styles.publishedDate}>Published: {publishedDate}</Text>
      <Text style={styles.description}>{description}</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 225,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.PWHITE,
  },
  author: {
    fontSize: 18,
    color: Colors.GRAY,
    textAlign: 'center',
    marginBottom: 10,
  },
  publishedDate: {
    fontSize: 16,
    color: Colors.GRAY,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: Colors.PWHITE,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  loadingText: {
    textAlign: 'center',
    color: Colors.PWHITE,
    backgroundColor: Colors.DARK,
  },
});

export default BookDetails;