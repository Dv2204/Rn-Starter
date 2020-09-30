import React from 'react';
import {View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.styleView}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxTwo}></View>
            <View style={styles.boxThree}></View>
        </View>
    );
};

const styles = StyleSheet.create({

    styleView: {
        borderWidth:1,
        flexDirection: 'row',
        justifyContent: "space-between",
        height:200
    },
    boxOne: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    boxTwo: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    boxThree: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        // alignSelf: 'flex-end'
    }
});

export default BoxScreen;