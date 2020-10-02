import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config';
import {Header} from 'react-native-elements';

export default class ReadStory extends React.Component{
    constructor(){
        super()
        this.state = {
            title : '',
            author : '',
            story : ''
        }
    }
    submitStory = ()=>{
        db.collection('Stories').add({
            'title' : this.state.title,
            'author' : this.state.author,
            'story' : this.state.story
        })
    }
    render(){
        return(
            <View style = {{flex : 0.1}}>

                <Header title = {"Write Story"} backgroundColor = "yellow" style = {{fontSize : 30, fontWeight : 'bold'}}/>

                <View style = {{flex : 0.8}}>
                    <TextInput 
                    style = {styles.inputBox}
                    placeholder = {'Story Title'}
                    onChangeText = {(text)=>{
                        this.setState({
                            title : text
                        })
                    }}/>
                    <TextInput 
                    style = {styles.inputBox}
                    placeholder = {'Story author'}
                    onChangeText = {(text)=>{
                        this.setState({
                            author : text
                        })
                    }}/>
                    <TextInput 
                    style = {styles.inputBox}
                    placeholder = {'Story'}
                    multiline = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            story : text
                        })
                    }}/>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{
                        this.submitStory()
                    }}><Text style = {styles.text}>Submit</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox : {
        width : 300,
        height : 50
    },
    button : {
        width : 200,
        height : 100,
        backgroundColor : '#d1a3a4'
    },
    text : {
        fontSize : 20,
        color : 'maroon'
    }
})