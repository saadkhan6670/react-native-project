import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text } from 'react-native';
import { Header, Button, Spinner, CardSection } from './src/components/common'
import LoginForm from './src/components/LoginForm'


export default class App extends Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBxrC7wDYReuJ-p1a2YdDa5lZrsHpu6N04",
      authDomain: "authentication-17.firebaseapp.com",
      databaseURL: "https://authentication-17.firebaseio.com",
      projectId: "authentication-17",
      storageBucket: "authentication-17.appspot.com",
      messagingSenderId: "722094038539"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });

      }
    })
  }

  onButtonPress() {
    console.log("logout")
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => { firebase.auth().signOut()}}> Log Out </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }


  }

  render() {
    return (
      <View >
        <Header headertext="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
