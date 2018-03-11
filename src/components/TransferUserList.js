import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem, Card, Input, Text } from 'react-native-elements';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { transferUsersFetch, searchTermChanged, transferMember } from '../actions/';
import { LabelInput } from './common';

class TransferUserList extends Component {
    componentWillMount() {
        this.props.transferUsersFetch({ currentUser: this.props.source_user });
    }

    onSearchTermChange = (text) => {
        this.props.searchTermChanged(text);
    }

    renderError = () => {
        if (this.props.error) {
            return (
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            );
        }
    }

    renderRow = ({ item }) => {
        return (
            <ListItem
                key={item.uid}
                title={item.name}
                onPress={() => this.props.transferMember({
                    member_id: this.props.member.uid,
                    dest_user: item.uid,
                    source_user: this.props.source_user
                    }
                )}
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
                {this.renderError()}
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
    const { user } = state.auth;
    return {
        users,
        searchTerm,
        source_user: user.uid,
        error: state.auth.error
    };
};

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
    }
};

export default connect(mapStateToProps, { transferUsersFetch, searchTermChanged, transferMember })(TransferUserList);
