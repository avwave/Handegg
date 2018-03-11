import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions';

class StartScreen extends Component {
    componentWillMount = () => {
        this.props.facebookLogin({ initialize: true });
    }
    onButtonPress = () => {
        this.props.facebookLogin({ initialize: false });
    }

    render() {
        return (
            <View
                style={styles.rootContainer}
            >
                <View style={styles.container}>
                    <Text style={styles.welcome}>Teamster</Text>
                    <Text style={styles.welcomeSubtext}>
                        get started, will you?
                    </Text>
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                        onPress={this.onButtonPress}
                        loading={this.props.loading}
                        disabled={this.props.loading}
                    />
                </View>
            </View>
        );
    }
}

const magicNumber = 11;
const styles = {
    rootContainer: {
        backgroundColor: '#2089dc',
        flex: 1,
        
        justifyContent: 'center',
    },
    container: {
        paddingRight: magicNumber * 3,
        paddingLeft: magicNumber * 3,
        paddingTop: magicNumber * 3,
        marginTop: magicNumber * 5,
        
    },
    welcome: {
        fontSize: magicNumber * 4,
        color: 'white',
        backgroundColor: 'transparent',
        marginBottom: magicNumber * 2,
        textAlign: 'center'
    },
    welcomeSubtext: {
        fontSize: magicNumber * 2,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { facebookLogin })(StartScreen);
