import React from 'react';
import {View, Text, Image} from 'react-native';
import {globalStyle, image} from './styles/globalStyle';
import Card from './shares/Card';

export default function ReviewDetials({route}) {
  const {params} = route || {};
  console.log('route :>>', params);
  const {title, name, rating, price} = params;
  return (
    <View style={globalStyle.container}>
      <Card>
        <Text> {title} </Text>
        <Text> {name} </Text>
        <Text> {price} </Text>
        <View>
          <Image source={image.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}
