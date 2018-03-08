import _ from 'lodash';
import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { memberUpdate, memberSave } from '../actions';
import MemberForm from './MemberForm';

class MemberEdit extends Component {
    componentWillMount() {
        _.each(this.props.member, (value, prop) => {
            this.props.memberUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, position, stats1, stats2, stats3 } = this.props;
        this.props.memberSave({ name, position, stats1, stats2, stats3, uid: this.props.member.uid });
    }
    
    render() {
        return (
            <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid keyboardShouldPersistTaps='handled'>
                <Card>
                    <MemberForm {...this.props} />
                    <Button
                        text='Save Changes'
                        buttonStyle={{ 
                            width: '100%', 
                            marginTop: 10
                        }}
                        onPress={this.onButtonPress.bind(this)}
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

export default connect(mapStateToProps, {
    memberUpdate,
    memberSave
})(MemberEdit);
