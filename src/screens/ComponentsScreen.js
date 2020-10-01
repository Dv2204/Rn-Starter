import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const Name = 'flatlist';

    return (
        <View>
        <Text style={styles.textStyle}>This is a component screen!</Text>
        <Text style={styles.NameStyle}>We are going to display components here okay? such as {Name}</Text>
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