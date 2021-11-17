import React from "react";
import { View,Text,SafeAreaView } from "react-native";

const Summary = ({route})=>{
    console.log(route.params.data)
    return(
    <SafeAreaView>
        <Text>{"Summary"}</Text>
    </SafeAreaView>
)}

export default Summary;