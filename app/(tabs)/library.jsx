import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from './../../components/Lib/Slider';
import { Colors } from './../../constants/Colors';

const Library = () => {
  return (
    <View style={styles.container}>

      {/* RECENTLY VIEWED BOOKS SLIDER */}
      <Slider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
});

export default Library;