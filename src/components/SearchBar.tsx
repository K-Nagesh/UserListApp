import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery } : SearchBarProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize:16,
    },
});

export default SearchBar;
