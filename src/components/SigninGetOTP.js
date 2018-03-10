import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';
import { Keyboard } from 'react-native';

import { connect } from 'react-redux';
import { phoneChanged, requestOTP } from '../actions';
import { Spinner, LabelInput } from './common';

class SignupOTP extends Component {
    onPhoneChange = (text) => {
        this.props.phoneChanged(text);
    }

    onButtonPress = () => {
        const { phone } = this.props;
        Keyboard.dismiss();
        this.props.requestOTP({ phone });
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
                text='Request Code' 
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
                title="Request Code"
            >
                <LabelInput
                    label='Phone'
                    iconName='phone'
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    onChangeText={this.onPhoneChange}
                    value={this.props.phone}
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
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { requestOTP, phoneChanged })(SignupOTP);

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
    }
};

