import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import * as actions from '../actions';
import { Spinner, LabelInput } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        Keyboard.dismiss();
        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <Text h4 style={styles.errorTextStyle}>{this.props.error}</Text>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button
                text='Login'
                buttonStyle={{ 
                    width: '100%', 
                    marginTop: 10
                }}
                onPress={this.onButtonPress.bind(this)}
            />
        );
    }

    render() {
        return (
            <Card
                title="Authentication"
            >
                <LabelInput
                    label='Email'
                    placeholder='user@gmail.com'
                    iconName='email'
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoFocus
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
                <LabelInput
                    label='Password'
                    placeholder='password'
                    secureTextEntry
                    iconName='lock'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
                
                {this.renderError()}

                {this.renderButton()}
            </Card>
        );
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, actions)(LoginForm);

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
    }
};
