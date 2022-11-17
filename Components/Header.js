import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ToDo List</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#432C7A',
    height: 80,
  },
  headerText: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 30,
  },
});
