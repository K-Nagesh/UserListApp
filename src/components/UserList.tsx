import React from 'react';
import { FlatList } from 'react-native';
import { User } from '../types/User';
import UserItem from './UserItem';

interface UserListProps {
    users: User[];
}

const UserList = ({ users }:UserListProps) => {
    
    return (
        <FlatList
            data={users}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => <UserItem user={item} />}
        />
    );
};

export default UserList;
