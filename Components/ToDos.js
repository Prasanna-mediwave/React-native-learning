import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ToDos = ({item, deletHandler}) => {
  return (
    <TouchableOpacity onPress={() => deletHandler(item.key)}>
      <Text style={styles.todoText}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default ToDos;

const styles = StyleSheet.create({
  todoText: {
    margin: 15,
    padding: 15,
    backgroundColor: '#80489C',
    borderColor: '#FF8FB1',
    borderWidth: 3,
    borderRadius: 25,
    borderStyle: 'dotted',
    color: '#ffff',
    fontWeight: '700',
  },
});
