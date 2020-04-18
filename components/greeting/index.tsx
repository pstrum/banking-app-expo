import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Greeting = () => {
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>Hello</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Arial',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Greeting;
