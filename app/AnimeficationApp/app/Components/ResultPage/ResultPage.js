import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, Button, Platform, Image} from 'react-native';

export default class ResultPage extends React.Component {
  static navigationOptions = {
    title: 'ResultPageScreen',
  };

  getImageFromApiAsync() {
  return fetch('#ServerURL#',
    {
    method: 'POST',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <View >
        <Text>Ta-daa! Here is the result!</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.headerText}>
          Show Image From HTTP URL In React Native.
        </Text>       
        <Image
          style={{width: '100%', height: 200,resizeMode : 'stretch' }}
          source={{uri: 'https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg'}} 
        />    
      </View>

      <Button
        title="Take another photo!"
        onPress={() => navigate('UploadPageScreen')}
      />

      <Button
        title="Go to main page"
        onPress={() => navigate('MainPageScreen')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 fontWeight: 'bold'
  },
  
});