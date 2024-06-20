import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyC35FR-BwUAnh5v-Uf3JO0_rVvszsUF8y0';

let bookIds = [];

export const searchBooksByQuery = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        maxResults: 20,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching books by query:', error);
    return [];
  }
};

export const fetchLatestBooks = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: 'subject:nonfiction',
        orderBy: 'newest',
        maxResults: 10,
        key: API_KEY,
      },
    });
    bookIds = response.data.items.map(item => item.id);
    return response.data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      params: {
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};

export const getSavedBookIds = () => bookIds;

export const searchBooksByCategory = async (category) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: `subject:${category}`,
        maxResults: 20,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching books by category:', error);
    return [];
  }
};

export const fetchBookDetails = async (bookId) => {
  try {
    const response = await axios.get(`${BASE_URL}/volumes/${bookId}?key=${API_KEY}`);
    const book = response.data;
    return {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown',
      description: book.volumeInfo.description,
      publishedDate: book.volumeInfo.publishedDate,
      image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
    };
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};
