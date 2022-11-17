import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Prasanna');
  const [age, setAge] = useState(28);
  const [people, setPeople] = useState([
    {Name: 'Raja', Age: 23, key: 1},
    {Name: 'Jagi', Age: 21, key: 2},
    {Name: 'Dolent', Age: 30, key: 3},
    {Name: 'Ob', Age: 24, key: 4},
    {Name: 'Rajesh', Age: 25, key: 5},
  ]);
  const images = [
    {
      id: 1,
      url: 'https://i.pinimg.com/736x/73/ac/0b/73ac0b7c56413b1d8aff5b17d26c0e37.jpg',
      anim: 'Naruto',
    },
    {
      id: 2,
      url: 'https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg',
      anim: 'Kakashi',
    },
    {
      id: 3,
      url: 'https://i.pinimg.com/736x/d6/17/2a/d6172a9596a1ae13e79cd53df640e85b.jpg',
      anim: 'Itachi',
    },
    {
      id: 4,
      url: 'https://w0.peakpx.com/wallpaper/351/551/HD-wallpaper-hinata-anime-boruto-hyuga-ino-manga-naruto-naruto-shippuden-sakura-waifu.jpg',
      anim: 'Hinata Hyuga',
    },
    {
      id: 6,
      url: 'https://i.pinimg.com/originals/0a/a9/9f/0aa99fd35cf415c28bc0b02b4e0961cb.jpg',
      anim: 'sasuke',
    },
  ];
  const pressHander = key => {
    setPeople(prevPlayer => {
      return prevPlayer.filter(newPlayer => newPlayer.key !== key);
    });
  };
  return (
    <ScrollView style={styles.main}>
      <View>
        <Text style={styles.header}>Hello World</Text>
      </View>
      <View>
        <Text style={styles.bolder}>Enter your Name</Text>
        <TextInput
          style={styles.inputField}
          placeholder="eg.Rajesh"
          onChangeText={val => {
            setName(val);
          }}
        />
        <Text style={styles.bolder}>Enter your Age</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.inputField}
          placeholder="eg.99"
          onChangeText={val => {
            setAge(val);
          }}
        />
      </View>
      <Text style={styles.bolder}>
        My Name is {name} and I'm {age} years old
      </Text>
      <View>
        <View style={styles.playerList}>
          {people.map(item => (
            <View key={item.key}>
              <TouchableOpacity onPress={() => pressHander(item.key)}>
                <Text style={styles.playerName}>
                  Player Name is {item.Name} and Age is {item.Age}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <FlatList
        style={styles.cardList}
        numColumns={2}
        keyExtractor={item => item.id}
        data={images}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.url}} style={{width: 150, height: 150}} />
            <Text
              style={{textAlign: 'center', color: '#000', fontWeight: '900'}}>
              {item.anim}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FAF7F0',
    flex: 1,
  },
  header: {
    color: '#000',
    backgroundColor: '#CDFCF6',
    fontSize: 20,
    padding: 20,
    fontWeight: '900',
    opacity: 0.7,
  },
  bolder: {
    margin: 5,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputField: {
    borderColor: '#BCCEF8',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 200,
  },
  playerList: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  playerName: {
    backgroundColor: '#98A8F8',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  cardList: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  card: {
    margin: 15,
  },
});

export default App;
