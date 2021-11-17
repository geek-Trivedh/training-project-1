import React from "react";
import { useState } from "react";

import { useForm,Controller } from "react-hook-form";
import {Text,TextInput,SafeAreaView,StyleSheet, View, Keyboard,Alert,TouchableOpacity, Switch} from "react-native";
import DatePicker from "react-native-date-picker";
import DropDownPicker from 'react-native-dropdown-picker';


export default function SignUpForm({navigation}){
    const [date,setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const items = [
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
      {label: 'Others', value: 'others'},
    ];

    const {control, handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            name:"",
            email:"",
            number:"",
            agree:false,
            gender:null
        }
    });
    const onSubmit = data => {
        console.log(data)
        navigation.navigate("Summary",data)
        
    };

    const styles = StyleSheet.create({
        container:{
           paddingTop:20,
        },
        input:{
            borderColor:"#ccc",
            borderTopWidth:1,
            borderBottomWidth:1,
            borderRadius:5,
            margin:5,
            height:50,
            paddingLeft:20,
            paddingRight:20,
        },
        heading:{
            fontSize:24,
            fontWeight:"700",
            margin:10,
           textAlign:"center"

        },
        signUpButton:{
           borderWidth:1,
            borderColor:"#007bff",
            backgroundColor:"#007bff",
            padding:15,
            margin:5,
       },
       signUpText:{
           color:"#fff",
           fontSize:20,
           textAlign:"center"
       },
       error:{
           color:"red",
           paddingLeft:20,
       }
    })
    return(
        <SafeAreaView style={styles.container}>
            <Controller 

            control={control}
            rules={{
                required:true,
                maxLength:30,
            }}
            render={({field:{onChange,onBlur,value}})=>(
                <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Your name"
                value={value} />
            )}
            name="name"
            />
            {errors.name && <Text style={styles.error}>This is a required field</Text>}

            <Controller
            control={control}
            rules={{
                required:true,
                maxLength:30,
                pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            render={({field:{onChange,onBlur,value}})=>(
                <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Your email"
                value={value} />
            )}
            name="email"
            />
            {errors.email?.type === "required" ? 
            <Text style={styles.error}>This is a required field</Text>:  
            errors.email &&
            <Text style={styles.error}>Enter a valid email</Text>}
            <Controller 
            control={control}
            rules={{
                required:true,
                maxLength:10,
            }}
            render={({field:{onChange,onBlur,value,setValue}})=>(
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={onChange}
                placeholder="Your mobile number"
                value={value} />
            )}
            name="number"
            />
            {errors.number?.type === "required" ? 
            <Text style={styles.error}>This is a required field</Text>:  
            errors.number &&
            <Text style={styles.error}>Enter a valid number</Text>}
        <Controller 
            defaultValue={false}
            control={control}
            rules={{
                required:true,
            }}
            render={({field:{onChange,onBlur,value}})=>(
                <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",margin:5}}>
                <Switch
                trackColor={{ false: "#767577", true: "#007bff" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={value}
                 />
                 <Text>Agree</Text>
                 </View>
            )}
            name="agree"
            />
            {errors.email?.type === "required" ? 
            <Text style={styles.error}>This is a required field</Text>:  
            errors.email &&
            <Text style={styles.error}>Enter a valid email</Text>}
        {/* <DatePicker
                modal
                open={false}
                date={date}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              /> */}
              <Controller 
            defaultValue={false}
            control={control}
            rules={{
                required:true,
            }}
            render={({field:{onChange,onBlur,setValue,value}})=>(
                <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",margin:5}}>
                    <View style={{
                        elevatedElement: {
                            zIndex: 3, // works on ios
                            elevation: 3, // works on android
                          }
                    }}>

                 <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                />
                    </View>
                 <Text>Agree</Text>
                 </View>
            )}
            name="gender"
            />
            
            <TouchableOpacity style={styles.signUpButton} 
            onPress={
                handleSubmit(onSubmit)
                }>
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
           
    )
}