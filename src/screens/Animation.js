import React, {useState} from 'react';
//import { TouchableOpacity } from 'react-native';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import BoxScreen from './BoxScreen';
//import Animated from "react-native-reanimated";
//import {useSpring, animated} from 'react-spring'

//   const props = useSpring({opacity: 1, from: {opacity: 0}})
//   return <animated.div style={props}>I will fade in</animated.div>

// function Animation () {
// const position = useRef(new Animated.ValueXY({x:0,y:0})).current
// Animated.timming(position,{
//     toValue:{x:200, y:500},
//     duration:2000
// }).start()
// return (
//     <View style={{flex:1}}>
//         <Animated.View style={{
//             height:80,
//             width:80,
//             alignItems:"center",
//             backgroundColor: 'black',
//             transform: [
//                 {translateX:position.x},
//                 {translateY:position.y}
//             ]
//         }} />
//     </View>
// );    
// }
const Animation = () => {
        const opacity = useState(new Animated.Value(0))[0]

        function fadeinBall () {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }).start()
        }
        function fadeoutBall () {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start()
        }

    return (
        <View style={{flex:1}}>
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Animated.View 
                    style={{opacity}}
                ><BoxScreen></BoxScreen></Animated.View>
                <TouchableOpacity onPress={fadeinBall}>
                    <Text>
                        Fade In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fadeoutBall}>
                    <Text>
                        Fade Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Animation;