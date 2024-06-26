import React from 'react';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import Category from '../../components/Home/Category';
import { Colors } from './../../constants/Colors';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const Home = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.push(`/booklist/${category.title}`);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header />
      {/* SLIDER */}
      <Slider />
      {/* CATEGORY */}
      <Category onPressCategory={handleCategoryPress} />
      {/* POPULAR */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
});

export default Home;
