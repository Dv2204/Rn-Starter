import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput}  from 'react-native';

const TextScreen = () => {
    const [Pass,SetPass] = useState('');
    return(
        <View>
            <Text>Enter Password</Text>
            <TextInput 
            style={styles.Input}
                autoCapitalize='none'
                autoCorrect={false}
                value={Pass}
                onChangeText={(NewPass)=>{
                    SetPass(NewPass)
                }}
            />
            <Text>Your Password is: {Pass}</Text>
            { Pass.length < 5 ? <Text>Enter Big Password</Text> : <Text>Fine</Text> }
        </View>
    );
};

const styles = StyleSheet.create({

    Input: {
        margin: 15,
        borderWidth:1,
        // borderColor:'black'
    }
});

export default TextScreen;