import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem, Card, Input } from 'react-native-elements';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { transferUsersFetch, searchTermChanged, transferMember } from '../actions/';
import { LabelInput } from './common';

class TransferUserList extends Component {
    componentWillMount() {
        this.props.transferUsersFetch();
    }

    onSearchTermChange = (text) => {
        this.props.searchTermChanged(text);
    }

    renderRow = ({ item }) => {
        return (
            <ListItem
                key={item.uid}
                title={item.name}
                onPress={() => this.props.transferMember(item.uid)}
            />
        );
    }

    render() {
        return (
            <Card title={`Transfer ${this.props.member.name} to...`} >
                <LabelInput
                    label='Search...'
                    iconName='search'
                    onChangeText={this.onSearchTermChange}
                    value={this.props.searchTerm}
                />
                <FlatList
                    data={this.props.users.filter(item => item.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1)}
                    renderSeparator={null}
                    renderItem={this.renderRow.bind(this)}
                    keyExtractor={(item, index) => item.uid}
                />
            </Card>
            
        );
    }
}
const mapStateToProps = (state) => {
    const { users, searchTerm } = state.users;
    return { users, searchTerm };
};

export default connect(mapStateToProps, { transferUsersFetch, searchTermChanged, transferMember })(TransferUserList);
