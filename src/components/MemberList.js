import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
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
            <FlatList
                data={this.props.members}
                renderItem={this.renderRow}
                keyExtractor={item => item.uid}
            />
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
