import _ from 'lodash';
import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { memberUpdate, memberSave } from '../actions';
import MemberForm from './MemberForm';

class MemberEdit extends Component {
    componentWillMount() {
        _.each(this.props.member, (value, prop) => {
            this.props.memberUpdate({ prop, value });
        });
    }

    onButtonPress = () => {
        const { name, position, stats1, stats2, stats3, stats4, notes } = this.props;
        this.props.memberSave({ name, position, stats1, stats2, stats3, stats4, notes, uid: this.props.member.uid });
    }
    
    onTransferPress = () => {
        Actions.transferUserList({ member: this.props.member });
    }
    
    render() {
        return (
            <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid keyboardShouldPersistTaps='handled'>
                <Card>
                    <MemberForm {...this.props} />
                    <Button
                        text='Transfer player...'
                        buttonStyle={{ 
                            width: '100%', 
                            marginTop: 10
                        }}
                        onPress={this.onTransferPress}
                    />
                    <Button
                        text='Save Changes'
                        buttonStyle={{ 
                            width: '100%', 
                            marginTop: 10
                        }}
                        onPress={this.onButtonPress}
                    />
                </Card>
            </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, position, stats1, stats2, stats3, stats4, notes } = state.memberForm;
    return { name, position, stats1, stats2, stats3, stats4, notes };
};

export default connect(mapStateToProps, {
    memberUpdate,
    memberSave
})(MemberEdit);
