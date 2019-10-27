import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component1 extends Component {
  render() {
    return ( 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Animefication!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);