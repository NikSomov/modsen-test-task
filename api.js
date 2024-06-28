import axios from 'axios';
const API_URL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = 'AIzaSyC2KItWdJjuUNcn7LlOp18VtB0kCwqZ7UE'


export const searchBooksByQuery = async (query, startIndex = 0, maxResults = 30, orderBy = 'relevance') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        startIndex,
        maxResults,
        orderBy,
        key: API_KEY,
      },
    });
    return {
      books: response.data.items || [],
      totalItems: response.data.totalItems || 0,
    };
  } catch (error) {
    console.error('Error searching books by query:', error);
    return { books: [], totalItems: 0 };
  }
};

export const fetchLatestBooks = async () => {
  let bookIds = [];
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

export const searchBooksByCategory = async (category, startIndex = 0, maxResults = 30, orderBy = 'relevance') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: `subject:${category}`,
        startIndex,
        maxResults,
        orderBy,
        key: API_KEY,
      },
    });
    return {
      books: response.data.items || [],
      totalItems: response.data.totalItems || 0,
    };
  } catch (error) {
    console.error('Error searching books by category:', error);
    return { books: [], totalItems: 0 };
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

export const searchBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: `inauthor:${author}`,
        maxResults: 20,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching books by author:', error);
    return [];
  }
};
