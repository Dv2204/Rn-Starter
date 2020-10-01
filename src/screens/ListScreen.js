import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const Friends = [
        {name: 'Paritosh OP', },
        {name: 'Friend #2', },
        {name: 'Friend #3', },
        {name: 'Friend #4', },
        {name: 'Friend #5', },
        {name: 'Friend #6', },
        {name: 'Friend #7', },
        {name: 'Friend #8', },
        {name: 'Friend #9', }
    ];

    return (
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={obj => obj.name}
        data={Friends} 
        renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;