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
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Greeting;
