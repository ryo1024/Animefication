import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, Button} from 'react-native';

export default class UploadPage extends React.Component {
  static navigationOptions = {
    title: 'UploadPageScreen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <View >
        <Text>Take a selfie!</Text>
      </View>

      <Button
        title="Take a picture"
        onPress={() => navigate('CameraPageScreen')}
      />

      <Button
        title="Go back to main page"
        onPress={() => navigate('MainPageScreen')}
      />
      </View>
    );
  }
}