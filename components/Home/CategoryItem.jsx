import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ category, onCategoryPress }) => {
  return (
    <TouchableOpacity
      style={[styles.categoryItem, { backgroundColor: category.color }]}
      onPress={() => onCategoryPress(category)}
    >
      <Text style={styles.categoryTitle}>{category.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 5,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
