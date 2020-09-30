import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
    <Text style={styles.text}>ReBel</Text>
    <Button
    onPress={() => props.navigation.navigate('Components')}
    title="Go to Components Demo"
    />
    <Button
    onPress={() => props.navigation.navigate('Image')}
    title="Go to Image Screen"
    />
    <Button
    onPress={() => props.navigation.navigate('CounterScreen')}
    title="Go to Counter Screen"
    />
    <Button
    onPress={() => props.navigation.navigate('Color')}
    title="Go to Colors Screen"
    />
    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('ListAssign')}>
      <Text style={{textAlign:"center"}}>Go to List Component</Text>
    </TouchableOpacity>
    <Button
    onPress={() => props.navigation.navigate('Overview')}
    title="Go to AppOverview"
    />
    <Button
    onPress={() => props.navigation.navigate('Square')}
    title="Go to Square Screen"
    />
    <Button
    onPress={() => props.navigation.navigate('CounterReducer')}
    title="Go to Counter with Reducer"
    />
    <Button
    onPress={() => props.navigation.navigate('Text')}
    title="Go to Text Screen"
    />
    <Button
    onPress={() => props.navigation.navigate('Box')}
    title="Go to Box Screen"
    />
    <Button
    onPress={() => props.navigation.navigate('Animation')}
    title="Go to Animation Screen"
    />
    <Button
    onPress={() => props.navigation.navigate('SignUp')}
    title="Go to SignUp Screen"
    />
    <Button
    onPress={() => props.navigation.navigate('Hactober')}
    title="Go to Hactober Screen"
    />
    </View>


  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: 'yellow',
    borderRadius: 100,
    height:30,
    width:200
  }
});

export default HomeScreen;
