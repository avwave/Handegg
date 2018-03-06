import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from 'react-native-elements';

import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
    
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBQDmxXE9ileIexQ_eTHRxMMIOe-xswygE',
            authDomain: 'teamsters-d00e2.firebaseapp.com',
            databaseURL: 'https://teamsters-d00e2.firebaseio.com',
            projectId: 'teamsters-d00e2',
            storageBucket: '',
            messagingSenderId: '88056195471'
        };
        firebase.initializeApp(config);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Header
                        centerComponent={{ text: 'HandEgg', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        statusBarProps={{ barStyle: 'light-content' }}
                    />
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}
