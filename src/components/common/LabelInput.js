import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Icon } from 'react-native-elements';

class LabelInput extends Component {
    constructor(props) {
        super(props);
        this.renderAccessory = this.renderAccessory.bind(this);
    }

    renderAccessory() {
        return (
            <Icon 
                name={this.props.iconName} 
                size={15}
                color='gray'
            />
        );
    }
    render() {
        return (
            <TextField 
                {...this.props}
                renderAccessory={this.renderAccessory}
            />
        );
    }
}

export { LabelInput };
