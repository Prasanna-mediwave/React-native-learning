import React from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from './styles/globalStyle';

export default function About() {
  return (
    <View style={globalStyle.container}>
      <Text>About page</Text>
    </View>
  );
}
