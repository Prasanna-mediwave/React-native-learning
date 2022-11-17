import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {globalStyle} from './styles/globalStyle';

export default function Home({navigation}) {
  const [review, setReview] = useState([
    {
      key: 1,
      title: 'need to buy new mobile',
      name: 'POCO F1',
      rating: '4.5',
      price: '18,000',
    },
    {
      key: 2,
      title: 'need to buy dresses',
      name: 'POLO T-shirt',
      rating: '4.6',
      price: '799',
    },
    {
      key: 3,
      title: 'need to buy shoes',
      name: 'Nike',
      rating: '4.0',
      price: '2,500',
    },
    {
      key: 4,
      title: 'need to buy gift',
      name: 'Peter England Blazer',
      rating: '4.7',
      price: '4,000',
    },
  ]);
  return (
    <View style={globalStyle.container}>
      <FlatList
        data={review}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetials', item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        ke
      />
    </View>
  );
}
