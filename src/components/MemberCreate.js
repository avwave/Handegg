import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Slider } from 'react-native-elements';
import { LabelInput } from './common';

export default class MemberCreate extends Component {
    render() {
        return (
            <Card>
                <LabelInput
                    label="Name"
                />
                <LabelInput
                    label="Position"
                />
                <LabelInput
                    label="Stats1"
                />
                <LabelInput
                    label="Stats2"
                />
                <LabelInput
                    label="Stats3"
                />
            </Card>
        );
    }
}

