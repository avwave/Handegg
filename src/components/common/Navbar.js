import React, { Component } from 'react';
import { Header } from 'react-native-elements';

class Navbar extends Component {
    render() {
        console.log(this.props);
        return (
            <Header
                centerComponent={{ text: this.props.title, style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                statusBarProps={{ barStyle: 'light-content' }}
            />
        );
    }
}

export { Navbar };
