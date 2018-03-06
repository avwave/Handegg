import React, { Component } from 'react';
import { Card, Input, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card
                title="Authentication"
            >
                <Input
                    placeholder='user@gmail.com'
                    leftIcon={
                        <Icon 
                            name='email' 
                            size={15}
                            color='gray'
                        />
                    }
                    containerStyle={{ width: '100%' }}
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoFocus
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
                <Input
                    placeholder='password'
                    secureTextEntry
                    leftIcon={
                        <Icon 
                            name='lock' 
                            size={15}
                            color='gray'
                        />
                    }
                    containerStyle={{ width: '100%' }}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />

                <Button
                    text='Login'
                    buttonStyle={{ 
                        width: '100%', 
                        marginTop: 10
                    }}
                />
            </Card>
        );
    }
}
const mapStateToProps = state => {
    console.log(state.auth);
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, actions)(LoginForm);
