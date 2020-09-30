import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const OverviewDetail = (props) => {
    return(
            <View>
                <Text>{props.head}</Text>
                <Button
                    title={props.titleMore}
                    onPress={()=>{
                        props.onIncrease();
                    }}
                ></Button>
                <Button
                    title={props.titleLess}
                    onPress={()=>{
                        props.onDecrease();
                    }}
                ></Button>
            </View>
            

    );
};

export default OverviewDetail;