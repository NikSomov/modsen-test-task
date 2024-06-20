import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = ({ description, publishedDate }) => (
  <View style={styles.container}>
    <Text style={styles.publishedDate}>Published: {publishedDate}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  publishedDate: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default About;
