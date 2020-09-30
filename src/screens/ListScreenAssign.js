import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ListScreenAssign = () => {
    const Friends = [
        {Name: 'Friend 1', Age: 20 },
        {Name: 'Friend 2', Age: 45},
        {Name: 'Friend 3', Age: 32},
        {Name: 'Friend 4', Age: 27},
        {Name: 'Friend 5', Age: 53},
        {Name: 'Friend 6', Age: 30},
        {Name: 'Friend 7', Age: 69},
        {Name: 'Friend 8', Age: 19}
    ];

    return (
        <FlatList 
        keyExtractor={obj => obj.Name}
        data={Friends}
        renderItem={({item}) => {
        return (
            <Text>
            {item.Name} - Age {item.Age}
            </Text>
        );
        }}
        />
    );
}

export default ListScreenAssign;