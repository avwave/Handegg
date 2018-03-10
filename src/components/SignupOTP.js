import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { emailChanged, phoneChanged, createUserOTP } from '../actions';
import { Spinner, LabelInput } from './common';

class SignupOTP extends Component {
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }
    onPhoneChange = (text) => {
        this.props.phoneChanged(text);
    }

    onButtonPress = () => {
        const { email, phone } = this.props;
        Keyboard.dismiss();
        this.props.createUserOTP({ phone, email });
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
                text='Submit' 
                buttonStyle={{ 
                    width: '100%', 
                    marginTop: 10
                }}
                onPress={this.onButtonPress}
            />
        );
    }

    render() {
        return (
            <KeyboardAwareScrollView extraScrollHeight={100} extraHeight={100} enableOnAndroid keyboardShouldPersistTaps='handled'>
                <Card
                    title="Sign Up"
                >
                    <LabelInput
                        label='Phone'
                        iconName='phone'
                        keyboardType="phone-pad"
                        returnKeyType="next"
                        onChangeText={this.onPhoneChange}
                        value={this.props.phone}
                    />
                    <LabelInput
                        label='Email'
                        placeholder='user@gmail.com'
                        iconName='email'
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                    
                    {this.renderError()}

                    {this.renderButton()}
                </Card>
            </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        phone: state.auth.phone,
        email: state.auth.email,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { createUserOTP, emailChanged, phoneChanged })(SignupOTP);

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
    }
};

