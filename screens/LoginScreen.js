import * as React from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }
    login = async (email, password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response){
                    this.props.navigation.navigate('Read')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found' : 
                    Alert.alert("User doesn't exist")

                    break;

                    case 'auth/invalid-email' : 
                    Alert.alert("Incorrect Email or Password")
                }
            }
        }
        else{
            Alert.alert("Enter Email or Password")
        }
    }
    render(){
        return(
            <KeyboardAvoidingView>

                <Image 
                source = {require('../PRO+C70+Images/bedtimestories.jpeg')}
                style = {{width : 40, height : 40}}/>

                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Email ID"}
                onChangeText = {(text)=>{
                    this.setState ({
                        email : text
                    })
                }}
                keyboardType = 'email-address'/>

                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Password"}
                onChangeText = {(text)=>{
                    this.setState ({
                        password : text
                    })
                }}/>
                <TouchableOpacity style = {{height : 30, width : 90, borderWidth : 1, marginTop : 20, paddingTop : 5}}
                onPress = {()=>{
                    this.login(this.state.email, this.state.password)
                }}><Text style = {{textAlign : "center"}}>Login</Text></TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}