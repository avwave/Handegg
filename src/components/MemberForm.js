import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { memberUpdate } from '../actions';
import { LabelInput } from './common';

class MemberForm extends Component {
    render() {
        return (
            <View>
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
                    label="Weight"
                    keyboardType="numeric"
                    value={this.props.stats1}
                    onChangeText={value => this.props.memberUpdate({ prop: 'stats1', value })}
                />
                <LabelInput
                    label="Height"
                    keyboardType="numeric"
                    value={this.props.stats2}
                    onChangeText={value => this.props.memberUpdate({ prop: 'stats2', value })}
                />
                <LabelInput
                    label="Speed"
                    keyboardType="numeric"
                    value={this.props.stats3}
                    onChangeText={value => this.props.memberUpdate({ prop: 'stats3', value })}
                />
                <LabelInput
                    label="Skill"
                    keyboardType="numeric"
                    value={this.props.stats4}
                    onChangeText={value => this.props.memberUpdate({ prop: 'stats4', value })}
                />
                <LabelInput
                    label="Notes"
                    value={this.props.notes}
                    onChangeText={value => this.props.memberUpdate({ prop: 'notes', value })}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, position, stats1, stats2, stats3, stats4, notes } = state.memberForm;
    return { name, position, stats1, stats2, stats3, stats4, notes };
};

export default connect(mapStateToProps, { memberUpdate })(MemberForm);
