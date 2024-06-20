import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getBookById } from '../../api';

const BookListCard = ({ book }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const data = await getBookById(book.id);
        setBookData(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookData();
  }, [book.id]);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: bookData?.volumeInfo?.imageLinks?.thumbnail }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{bookData?.volumeInfo?.title}</Text>
        <Text style={styles.author}>{bookData?.volumeInfo?.authors?.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
});

export default BookListCard;
