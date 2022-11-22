import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View, Text, Modal} from 'react-native';
import Card from './shares/Card';
import {globalStyle} from './styles/globalStyle';

export default function Home({navigation}) {
  const [modal, setModal] = useState(false);
  const [review, setReview] = useState([
    {
      key: 1,
      title: 'need to buy new mobile',
      name: 'POCO F1',
      rating: '4',
      price: '18,000',
    },
    {
      key: 2,
      title: 'need to buy dresses',
      name: 'POLO T-shirt',
      rating: '3',
      price: '799',
    },
    {
      key: 3,
      title: 'need to buy shoes',
      name: 'Nike',
      rating: '5',
      price: '2,500',
    },
    {
      key: 4,
      title: 'need to buy gift',
      name: 'Peter England Blazer',
      rating: '2',
      price: '4,000',
    },
  ]);
  return (
    <View style={globalStyle.container}>
      <Modal visible={modal}>
        <TouchableOpacity onPress={() => setModal(false)}>
          <Text> X </Text>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => setModal(true)}>
        <Text> + </Text>
      </TouchableOpacity>
      <FlatList
        data={review}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetials', item)}>
            <Card>
              <Text style={{fontFamily: 'GreatVibes-Regular', fontSize: 20}}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
        ke
      />
    </View>
  );
}
