import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider'; // Импорт компонента Slider
import { Colors } from './../../constants/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header />
      {/* SLIDER */}
      <Slider />
      {/* CATEGORY */}
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
