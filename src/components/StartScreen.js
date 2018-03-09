import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { checkUserToken } from '../actions';

import { Spinner } from './common';

class StartScreen extends Component {
    componentWillMount() {
        this.props.checkUserToken();
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ height: 100 }}>
                    <Text>Reticulating splines....</Text>
                    <Spinner size='large' />
                </View>
                
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default connect(null, { checkUserToken })(StartScreen);
