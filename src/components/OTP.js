import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SigninOTP from './SigninOTP';
import SigninGetOTP from './SigninGetOTP';

export default class OTP extends Component {
    render() {
        return (
            <KeyboardAwareScrollView extraScrollHeight={100} extraHeight={100} enableOnAndroid keyboardShouldPersistTaps='handled'>
                <SigninGetOTP />

                <SigninOTP />
            </KeyboardAwareScrollView>
            
        );
    }
}
