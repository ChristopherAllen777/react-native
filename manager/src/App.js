import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
    // Initialize Firebase
        const config = {
            apiKey: "AIzaSyAOzjXE5gRT3-fyyJCzczvNYQm3qhl8HJk",
            authDomain: "manager-5b29b.firebaseapp.com",
            databaseURL: "https://manager-5b29b.firebaseio.com",
            projectId: "manager-5b29b",
            storageBucket: "manager-5b29b.appspot.com",
            messagingSenderId: "1094886847836"
        };
            firebase.initializeApp(config);
    }

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;