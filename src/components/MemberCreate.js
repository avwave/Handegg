import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, Button, Slider } from 'react-native-elements';
import { LabelInput } from './common';
import { connect } from 'react-redux';
import { memberUpdate } from '../actions';

class MemberCreate extends Component {
    render() {
        return (
            <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid keyboardShouldPersistTaps='handled'>
                <Card>
                    <LabelInput
                        label="Name"
                        value={this.props.name}
                        onChangeText={value => this.props.memberUpdate({ prop: 'name', value })}
                    />
                    <LabelInput
                        label="Position"
                        value={this.props.position}
                        onChangeText={value => this.props.memberUpdate({ prop: 'position', value })}
                    />
                    <LabelInput
                        label="Stats1"
                        value={this.props.stats1}
                        onChangeText={value => this.props.memberUpdate({ prop: 'stats1', value })}
                    />
                    <LabelInput
                        label="Stats2"
                        value={this.props.stats2}
                        onChangeText={value => this.props.memberUpdate({ prop: 'stats2', value })}
                    />
                    <LabelInput
                        label="Stats3"
                        value={this.props.stats3}
                        onChangeText={value => this.props.memberUpdate({ prop: 'stats3', value })}
                    />
                    
                </Card>
            </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, position, stats1, stats2, stats3 } = state.memberForm;
    return { name, position, stats1, stats2, stats3 };
};

export default connect(mapStateToProps, { memberUpdate })(MemberCreate);
