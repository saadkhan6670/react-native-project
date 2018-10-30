import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Header} from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBxrC7wDYReuJ-p1a2YdDa5lZrsHpu6N04",
        authDomain: "authentication-17.firebaseapp.com",
        databaseURL: "https://authentication-17.firebaseio.com",
        projectId: "authentication-17",
        storageBucket: "authentication-17.appspot.com",
        messagingSenderId: "722094038539"
      }
    
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <Header headerText="Authentication"/> 
        <LoginForm/>
      </View>
    );
  }
}

export default App;

