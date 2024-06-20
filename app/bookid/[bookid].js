import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getBookById } from '../../api';

const BookDetails = () => {
  const { bookid } = useLocalSearchParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: imageLinks?.thumbnail }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{authors?.join(', ')}</Text>
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
  },
  author: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  publishedDate: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  loadingText: {
    textAlign: 'center',
  },
});

export default BookDetails;
