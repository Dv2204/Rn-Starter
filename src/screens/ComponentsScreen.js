import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const Name = 'Divyanshu';

    return (
        <View>
        <Text style={styles.textStyle}>Getting Started with React native!</Text>
        <Text style={styles.NameStyle}>My name is {Name}</Text>
        </View>
    );
    };

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 45
    },
    NameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;