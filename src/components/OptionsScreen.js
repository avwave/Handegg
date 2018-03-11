import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class OptionsScreen extends Component {
    onButtonLogout= () => {
        this.props.logoutUser();
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                
                <Button
                    text='Log Out'
                    onPress={this.onButtonLogout}
                />
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

const mapStateToProps = (state) => {
    const { user } = state.auth;
    return { user };
};

export default connect(mapStateToProps, { logoutUser })(OptionsScreen);
