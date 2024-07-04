import React from 'react';
import Slider from './../../components/Lib/Slider';
import { Colors } from './../../constants/Colors';
import { View, StyleSheet } from 'react-native';

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