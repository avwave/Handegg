import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { membersFetch } from '../actions/';


class MemberList extends Component {
    componentWillMount() {
        this.props.membersFetch();
    }

    renderRow({ item }) {
        return (
            <ListItem
                key={item.uid}
                title={item.name}
                onPress={() => Actions.memberEdit({ member: item })}
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.props.members}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.uid}
                />
                <ActionButton
                    buttonColor="#2089dc"
                    onPress={() => { Actions.memberCreate(); }}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const members = _.map(state.members, (val, uid) => {
        return { ...val, uid };
    });
    
    return { members };
};

export default connect(mapStateToProps, { membersFetch })(MemberList);
