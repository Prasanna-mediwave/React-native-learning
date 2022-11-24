import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    margin: 10,
  },
  addBtn: {
    alignItems: 'center',
  },
});

export const image = {
  ratings: {
    1: require('./assets/rating-1.png'),
    2: require('./assets/rating-2.png'),
    3: require('./assets/rating-3.png'),
    4: require('./assets/rating-4.png'),
    5: require('./assets/rating-5.png'),
  },
};
