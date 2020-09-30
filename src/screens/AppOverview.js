import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import OverviewDetail from './Components/OverviewDetail';

const Increment = 20;
const AppOverview = () => {
    const [Red,setRed] = useState(0);
    const [Green,setGreen] = useState(0);
    const [Blue,setBlue] = useState(0); 
    console.log(Red);
    console.log(Green);
    console.log(Blue);
    return(
        <View>
            <OverviewDetail 
                head='Red'
                titleMore='More Red'
                titleLess='Less Red'
                onIncrease={()=>{
                    setRed(Red + Increment);
                }}
                onDecrease={()=>{
                    setRed(Red - Increment);
                }}
            />
            <OverviewDetail 
                head='Green'
                titleMore='More Green'
                titleLess='Less Green'
                onIncrease={()=>{
                    setGreen(Green + Increment);
                }}
                onDecrease={()=>{
                    setGreen(Green - Increment);
                }}
            />
            <OverviewDetail 
                head='Blue'
                titleMore='More Blue'
                titleLess='Less Blue'
                onIncrease={()=>{
                    setBlue(Blue + Increment);
                }}
                onDecrease={()=>{
                    setBlue(Blue - Increment);
                }}
            />
            <View style={{width:50, height:50, backgroundColor:`rgb(${Red}, ${Green}, ${Blue})`}}>
            </View>
        </View>
    );
};

export default AppOverview;