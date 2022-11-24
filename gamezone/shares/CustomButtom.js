import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function CustomButtom({text, onPress}) {
  return (
    <View style={styles.btnContainer}>
      <View style={styles.btn}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
