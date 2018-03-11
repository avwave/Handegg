import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ignoreWarnings from 'react-native-ignore-warnings';

import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';


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
        ignoreWarnings('Setting a timer');
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Router />
                </View>
            </Provider>
        );
    }
}
