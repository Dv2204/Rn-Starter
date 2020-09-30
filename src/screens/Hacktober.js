import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";
import Input from "./Components/CustomTextInput";

const reducer = (state, action) => {
  return { ...state, count: state.count + action.payload };
};

const Hactober = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ payload: -1 });
        }}
      />
      <Text>Current Count: {state.count}</Text>
      <Input />
    </View>
  );
};

export default Hacktober;
