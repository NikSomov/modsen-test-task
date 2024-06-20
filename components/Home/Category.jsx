import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';
import { useRouter } from 'expo-router';

const categories = [
  { id: '1', title: 'Fiction', color: '#ff6347' },
  { id: '2', title: 'Nonfiction', color: '#4682b4' },
  { id: '3', title: 'Science', color: '#32cd32' },
  { id: '4', title: 'History', color: '#ffd700' },
  { id: '5', title: 'Fantasy', color: '#ff4500' },
  { id: '6', title: 'Biography', color: '#8a2be2' },
];

const Category = () => {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <CategoryItem
      category={item}
      onCategoryPress={(category) => router.push('/booklist/' + category.title)}
    />
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contentContainer: {
    padding: 10,
  },
});

export default Category;
