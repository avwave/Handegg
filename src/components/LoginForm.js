import React, { Component } from 'react';
import { Card, Input, Icon, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Spinner } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
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
