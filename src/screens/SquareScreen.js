import React, {useReducer} from 'react';
import {Text, View} from 'react-native';
import OverviewDetail from './Components/OverviewDetail';

const Increment = 25;
const reducer = (state,action) => {
    switch(action.colorToChange)
    {
        case 'Red':
           return state.Red + action.amount > 255 || state.Red + action.amount < 0 
           ? state 
           : { ...state, Red: state.Red + action.amount};
            //return { ...state, Red: state.Red + action.amount};
        case 'Green':
            return state.Green + action.amount > 255 || state.Green + action.amount < 0 
            ? state 
            : { ...state, Green: state.Green + action.amount};
        case 'Blue':
            return state.Blue + action.amount > 255 || state.Blue + action.amount < 0 
            ? state 
            : { ...state, Blue: state.Blue + action.amount};
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {Red:0, Green:0, Blue:0})
    const { Red, Green, Blue} = state;
    return (
        <View>
            <OverviewDetail 
                head='Red'
                titleMore='More Red'
                titleLess='Less Red'
                onIncrease={()=>{
                    dispatch({ colorToChange: 'Red', amount: Increment })
                }}
                onDecrease={()=>{
                    dispatch({ colorToChange: 'Red', amount: -1*Increment })
                }}
            />
            <OverviewDetail 
                head='Green'
                titleMore='More Green'
                titleLess='Less Green'
                onIncrease={()=>{
                    dispatch({ colorToChange: 'Green', amount: Increment })
                }}
                onDecrease={()=>{
                    dispatch({ colorToChange: 'Green', amount: -1*Increment })
                }}
            />
            <OverviewDetail 
                head='Blue'
                titleMore='More Blue'
                titleLess='Less Blue'
                onIncrease={()=>{
                    dispatch({ colorToChange: 'Blue', amount: Increment })
                }}
                onDecrease={()=>{
                    dispatch({ colorToChange: 'Blue', amount: -1*Increment })
                }}
            />
            <View style={{backgroundColor: `rgb(${Red}, ${Green}, ${state.Blue})`, height: 50, width:50}}></View>
        </View>
    );
};

export default SquareScreen;