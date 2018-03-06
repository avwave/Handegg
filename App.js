import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Header } from 'react-native-elements';
import ReduxThunk from 'redux-thunk';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
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
