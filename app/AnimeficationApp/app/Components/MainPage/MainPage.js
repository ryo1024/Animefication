import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, Button} from 'react-native';

// export default class MainPage extends Component{
//     render(){
//         return(
//             <View>
//             <Text>
//                 Welcome to Animefication!(From main page)
//             </Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     row: {
//         flexDirection:'row',
//         justifyContent:'center',
//         padding:10,
//         backgroundColor: '#f4f4f4',
//         marginBottom:3
//     },
//     rowText: {
//         flex:1
//     }
// });

// AppRegistry.registerComponent('MainPage', () => MainPage);

export default class MainPage extends React.Component {
  static navigationOptions = {
    title: 'MainpageScreen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{width: 400, height: 200, backgroundColor: 'powderblue'}} />
            <View style={{width: 400, height: 250, backgroundColor: 'skyblue'}} />
            <View style={{width: 400, height: 300, backgroundColor: 'steelblue'}} />
          </View>
          <Text style={{fontSize:40}}>
            -->Welcome to Animefication, an app that enables you to take a photo of yourself 
            and convert it into your favourite Anime style!
          </Text>
        </View>
        <Button
          title="Go to Upload Page"
          onPress={() => navigate('UploadPageScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
  },
});
