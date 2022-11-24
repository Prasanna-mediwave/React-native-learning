import React, {useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ReviewForm from './ReviewForm';
import Card from './shares/Card';
import {globalStyle} from './styles/globalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

  const addReview = review => {
    review.key = Math.random().toString();
    setReview(currentReviews => {
      return [review, ...currentReviews];
    });
    setModal(false);
  };
  const deletHandler = key => {
    setReview(prevTodos => {
      return prevTodos.filter(delItem => delItem.key !== key);
    });
  };

  return (
    <View style={globalStyle.container}>
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyle.container}>
            <TouchableOpacity onPress={() => setModal(false)}>
              <MaterialIcons name="clear" size={20} />
            </TouchableOpacity>
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={globalStyle.addBtn}>
        <MaterialIcons name="add-circle-outline" size={30} />
      </TouchableOpacity>
      <FlatList
        data={review}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetials', item)}>
            <Card>
              <View style={styles.cardWarp}>
                <View>
                  <Text style={styles.Text}>{item.title}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => deletHandler(item.key)}>
                    <MaterialIcons name="clear" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        )}
        ke
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontFamily: 'Kanit-Bold',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardWarp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delText: {
    padding: 5,
    borderRadius: 25,
    fontSize: 15,
  },
});
