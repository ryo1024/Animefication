import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainPage from './app/Components/MainPage/MainPage.js';
import UploadPage from './app/Components/UploadPage/UploadPage.js';
import CameraPage from './app/Components/CameraPage/CameraPage.js';
import ResultPage from './app/Components/ResultPage/ResultPage.js';


const MainNavigator = createStackNavigator({
  MainPageScreen: {screen : MainPage},
  UploadPageScreen: {screen : UploadPage},
  CameraPageScreen: {screen : CameraPage},
  ResultPagescreen: {screen : ResultPage},
});

const App = createAppContainer(MainNavigator);

export default App;
