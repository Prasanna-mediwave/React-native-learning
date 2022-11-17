import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Components/Header';
import ToDos from './Components/ToDos';
import AddToDOList from './Components/AddToDoList';

const Remainder = () => {
  const [todos, setTodos] = useState([
    {text: 'need to buy mobile', key: 1},
    {text: 'need to buy dresses', key: 2},
    {text: 'need to call IDP', key: 3},
    {text: 'open new account', key: 4},
  ]);
  const deletHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(delItem => delItem.key !== key);
    });
  };
  const addListHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS', 'Please enter more then 3 chara long', [
        {
          text: 'close',
        },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.main}>
        {/* Header */}
        <View>
          <Header />
        </View>
        {/* Body */}
        <View style={styles.body}>
          {/* Add TOdo */}
          <View>
            <AddToDOList addListHandler={addListHandler} />
          </View>
          {/* TODO list */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <ToDos item={item} deletHandler={deletHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Remainder;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FCE2DB',
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  list: {
    flex: 1,
    marginBottom: 30,
  },
});
