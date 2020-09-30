import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from './Components/ImageDetail';

const ImageScreen = () => {
    return(
        <View>
        <ImageDetail title='Forest' imageName={require('../../assets/forest.jpg')} imageScore="9" />
        <ImageDetail title='Beach' imageName={require('../../assets/beach.jpg')} imageScore="5" />
        <ImageDetail title='Mountains' imageName={require('../../assets/mountain.jpg')} imageScore="8" />
        </View>
    );
};

const style = StyleSheet.create({

});

export default ImageScreen;