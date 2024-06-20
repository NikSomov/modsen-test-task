import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

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
    borderRadius: 10,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
