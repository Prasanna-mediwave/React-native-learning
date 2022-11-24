import React from 'react';
import {TextInput, View} from 'react-native';
import {globalStyle} from './styles/globalStyle';
import {Formik} from 'formik';
import CustomButtom from './shares/CustomButtom';

export default function ReviewForm({addReview}) {
  return (
    <View style={globalStyle.container}>
      <Formik
        initialValues={{title: '', name: '', price: '', rating: ''}}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}>
        {props => (
          <View>
            <TextInput
              style={globalStyle.input}
              placeholder="Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={globalStyle.input}
              multiline
              placeholder="Name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />

            <TextInput
              style={globalStyle.input}
              multiline
              placeholder="Price"
              onChangeText={props.handleChange('price')}
              value={props.values.price}
              keyboardType="numeric"
            />

            <TextInput
              style={globalStyle.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <CustomButtom text="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
