import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SigninOTP from './SigninOTP';
import SignupOTP from './SignupOTP';

export default class OTP extends Component {
    render() {
        return (
            <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid keyboardShouldPersistTaps='handled'>
                <SignupOTP />
                <SigninOTP />
            </KeyboardAwareScrollView>
            
        );
    }
}