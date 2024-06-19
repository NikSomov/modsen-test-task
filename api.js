import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyBy__1P7UUPDQtFJf6QSchsORdwTfoZ2TU';

let bookIds = [];

export const searchBooks = async (query) => {
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
    console.error(error);
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
    bookIds = response.data.items.map(item => item.id); // Сохранение id книг
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
    console.error(error);
    return null;
  }
};

export const getSavedBookIds = () => bookIds;
