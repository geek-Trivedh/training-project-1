import React, { useState } from "react";
import { View,Text,Button, TextInput,StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form:{
        borderWidth:1,
        borderColor:"#000",
        padding:10,
        margin:10,
        backgroundColor:"#4287f5",
        color:"#fff"
    },
    input:{
        borderColor:"#fff",
        borderWidth:1,
        padding:5,
        margin:15
    },
    label:{
        fontSize:22,
        padding:5,
        color:"#fff"
    },
    button:{
        color:"#fff",
        padding:10,
    }
})

const Home = ({navigation})=>{
    const [name,setName] = useState("Anonymous")
        return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text style={{fontSize:34,fontWeight:"900"}}>Login</Text>
        <View style={styles.form}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} onChangeText={text=>setName(text)}  placeholder="Enter Your Name"/>
            <Button
            color="#ff5c5c"
            style={styles.button}
            title="Proceed"
            onPress={() => navigation.navigate('Details',{name})}
            />
        </View>
   </View>
)
    }

export default Home;