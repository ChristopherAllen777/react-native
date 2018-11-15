import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBjcT2QRs0BhmDttaME3MNh-ylAa_I7aWg',
            authDomain: 'authentication-e16a7.firebaseapp.com',
            databaseURL: 'https://authentication-e16a7.firebaseio.com',
            projectId: 'authentication-e16a7',
            storageBucket: 'authentication-e16a7.appspot.com',
            messagingSenderId: '547230878722'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn: false });
            }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (       
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Spinner size="large" />
                </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header> 
                {this.renderContent()}
            </View>
        );
    }
}

export default App;