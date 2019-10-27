import React from 'react';
import { Text, View, TouchableOpacity,Image, Alert, } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import * as firebase from 'firebase';

// const FirebaseConfig = {
//     apiKey: "AIzaSyCPiULtrT0kDBdWQFmSjp_j9EMk646vRIM",
//     authDomain: "face-animefacation.firebaseapp.com",
//     databaseURL: "https://face-animefacation.firebaseio.com",
//     storageBucket: "face-animefacation.appspot.com",
//     project_id: "face-animefacation",
//     messagingSenderID: "364034910627"
//     };
export default class CameraExample extends React.Component {
  
  // firebase.initializeApp(firebaseConfig);
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      picture_uri: null,
      naviFunc: null,
      FirebaseConfig : {
    apiKey: "AIzaSyCPiULtrT0kDBdWQFmSjp_j9EMk646vRIM",
    authDomain: "face-animefacation.firebaseapp.com",
    databaseURL: "https://face-animefacation.firebaseio.com",
    storageBucket: "face-animefacation.appspot.com",
    project_id: "face-animefacation",
    messagingSenderID: "364034910627"
    },
    }

    // Initialize firebase...
    if (!firebase.apps.length) { 
        console.log("initialized")
        firebase.initializeApp(this.state.FirebaseConfig); }
  }
  // state = {
  //   hasCameraPermission: null,
  //   type: Camera.Constants.Type.back,
  //   picture_uri: null,
  //   naviFunc: null,
  // };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handlePhoto = async () => {
  if(true){
    console.log("Sanity Check")
    let photo = await this.camera.takePictureAsync();
    //let processed = Promise.resolve(photo)
    let uri = photo.uri
    this.setState({picture_uri: uri})
    this.uploadImage(uri)
    .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

  uploadImage = async(uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("my-image/");
    return ref.put(blob);
  }
  render() {
    const {navigate} = this.props.navigation;
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {this.camera = ref;}}
            style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 15, marginLeft: 5, marginBottom: 15, color: 'white' }}> Flip </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={
                    {flex: 0.5,
                    alignSelf: 'center',
                    marginBottom: 10,
                    width: 70,
                    height: 70,
                    borderWidth: 4,
                    borderRadius: 60,
                    borderColor: "#FFFFFF",}
                }
                // onPress={this.handlePhoto}>
                // </TouchableOpacity>
                onPress={() => { this.handlePhoto(); navigate('ResultPagescreen')}}> 
                </TouchableOpacity>

            <Image source={{uri: this.state.picture_uri}} style={{width: 40, height: 40}} />
            </View>
            
          </Camera>
        </View>
      );
    }
  }
}
