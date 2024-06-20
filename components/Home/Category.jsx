import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

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
    <View style={styles.CategoryContainer}>
    <Text style={styles.CategoryTitle}>Search by category</Text>
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}

    />
    </View>

  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  CategoryTitle: {
    fontSize: 16,
    fontFamily: 'comfortaa-b',
    marginBottom: 10,
    color: Colors.PWHITE,
    paddingHorizontal: 5,
  },
  CategoryContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
},

});

export default Category;
