import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { getBookById } from '../../api';
import { useRouter, useSearchParams } from 'expo-router';

const BookDetail = () => {
    const { bookid } = useSearchParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookDetails = async () => {
            const result = await getBookById(bookid);
            if (result) {
                setBook(result);
                setError('');
            } else {
                setError('Failed to fetch book details');
            }
        };

        fetchBookDetails();
    }, [bookid]);

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    if (!book) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image 
                source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                style={styles.bookImage}
            />
            <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
            <Text style={styles.bookAuthor}>{book.volumeInfo.authors?.join(', ')}</Text>
            <Text style={styles.bookDescription}>{book.volumeInfo.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    bookImage: {
        width: 150,
        height: 225,
        alignSelf: 'center',
        marginBottom: 20,
    },
    bookTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    bookAuthor: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    bookDescription: {
        fontSize: 16,
        textAlign: 'left',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    loadingText: {
        textAlign: 'center',
    },
});

export default BookDetail;
