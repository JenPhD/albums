//index.ios.js - place code in here for IOS!!!!

//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
//Self-closing tag if no text
const App = () =>
  (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

//Render to the device
AppRegistry.registerComponent('albums', () => App);