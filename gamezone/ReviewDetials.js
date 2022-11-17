import React from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from './styles/globalStyle';

export default function ReviewDetials({route}) {
  const {params} = route || {};
  console.log('route :>>', params);
  const {title, name, rating, price} = params;
  return (
    <View style={globalStyle.container}>
      <Text> {title} </Text>
      <Text> {name} </Text>
      <Text> {rating}</Text>
      <Text> {price} </Text>
    </View>
  );
}
