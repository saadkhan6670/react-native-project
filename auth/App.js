import React, {Component} from 'react';
import firebase from 'firebase'
import {View} from 'react-native';
import {Header} from './src/components/common'
                            
export default class App extends Component {
  componentDidMount(){
    firebase.initializeApp( {
      apiKey: "AIzaSyBxrC7wDYReuJ-p1a2YdDa5lZrsHpu6N04",
      authDomain: "authentication-17.firebaseapp.com",
      databaseURL: "https://authentication-17.firebaseio.com",
      projectId: "authentication-17",
      storageBucket: "authentication-17.appspot.com",
      messagingSenderId: "722094038539"
    })
  }
  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <Text> An App! </Text>
    
      </View>
    );
  }
}
