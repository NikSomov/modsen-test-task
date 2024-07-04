import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_VISITED_BOOKS_KEY = 'LAST_VISITED_BOOKS';

export const saveVisitedBook = async (book) => {
  try {
    const books = await AsyncStorage.getItem(LAST_VISITED_BOOKS_KEY);
    let booksArray = books ? JSON.parse(books) : [];
    booksArray = [book, ...booksArray.filter(b => b.id !== book.id)].slice(0, 5);
    await AsyncStorage.setItem(LAST_VISITED_BOOKS_KEY, JSON.stringify(booksArray));
  } catch (error) {
    console.error('Error saving visited book', error);
  }
};

export const getVisitedBooks = async () => {
  try {
    const books = await AsyncStorage.getItem(LAST_VISITED_BOOKS_KEY);
    return books ? JSON.parse(books) : [];
  } catch (error) {
    console.error('Error fetching visited books', error);
    return [];
  }
};
