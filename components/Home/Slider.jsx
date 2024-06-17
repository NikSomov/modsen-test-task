import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { fetchLatestBooks } from '../../api.js'; // Импорт новой функции из api.js
import { Colors } from './../../constants/Colors';

const Slider = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getLatestBooks = async () => {
            const results = await fetchLatestBooks();
            if (results.length === 0) {
                setError('Failed to fetch latest books');
            } else {
                setBooks(results);
                setError('');
            }
        };

        getLatestBooks();
    }, []);

    return (
        <View style={styles.sliderContainer}>
            <Text style={styles.sliderTitle}>Latest Publications</Text>
            {error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : (
                <FlatList
                    data={books}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.bookItem}>
                            <Image 
                                source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
                                style={styles.bookImage}
                            />
                            <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
                        </View>
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
        fontFamily:'comfortaa-b',
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
        fontFamily:'comfortaa-r',
        textAlign: 'center',
        color: Colors.PWHITE,
    },
});

export default Slider;
