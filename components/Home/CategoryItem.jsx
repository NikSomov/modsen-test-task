import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ category, onCategoryPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: category.color }]}
      onPress={() => onCategoryPress(category)}
    >
      <Text style={styles.title}>{category.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CategoryItem;
