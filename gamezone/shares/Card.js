import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardText}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
  },
  cardText: {
    padding: 15,
  },
});
