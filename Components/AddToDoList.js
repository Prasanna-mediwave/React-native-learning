import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const AddToDoList = ({addListHandler}) => {
  const [text, setText] = useState('');
  const changeHandler = val => {
    setText(val);
  };
  return (
    <View style={styles.inputWarp}>
      <View style={styles.inputText}>
        <TextInput
          placeholder="Enter thing to do"
          onChangeText={changeHandler}
        />
      </View>
      <TouchableHighlight
        onPress={() => addListHandler(text)}
        style={styles.submit}>
        <Text style={styles.addBtn}>Add to List</Text>
      </TouchableHighlight>
    </View>
  );
};

export default AddToDoList;

const styles = StyleSheet.create({
  inputWarp: {
    margin: 15,
  },
  inputText: {
    backgroundColor: '#FF8FB1',
    opacity: 0.5,
    borderBottomColor: '#80489C',
    borderBottomWidth: 2,
  },
  submit: {
    height: 40,
    backgroundColor: '#432C7A',
    marginTop: 30,
    borderRadius: 10,
  },
  addBtn: {
    textAlign: 'center',
    padding: 10,
    color: '#ffff',
  },
});
