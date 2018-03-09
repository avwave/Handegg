import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';

import { codeChanged, phoneChanged, verifyOTP } from '../actions';
import { Spinner, LabelInput } from './common';

class SigninOTP extends Component {
    onCodeChange = (text) => {
        this.props.codeChanged(text);
    }
    onPhoneChange = (text) => {
        this.props.phoneChanged(text);
    }

    onButtonPress = () => {
        const { code, phone } = this.props;
        Keyboard.dismiss();
        this.props.verifyOTP({ phone, code });
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
            <Card
                title="Signin"
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
                    label='Code'
                    iconName='confirmation-number'
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    onChangeText={this.onCodeChange}
                    value={this.props.code}
                />
                
                {this.renderError()}

                {this.renderButton()}
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        phone: state.auth.phone,
        code: state.auth.code,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { verifyOTP, codeChanged, phoneChanged })(SigninOTP);

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
    }
};

