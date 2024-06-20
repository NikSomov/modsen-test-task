import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Intro = ({ image, title, author }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 225,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});

export default Intro;
