import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
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
                </View>
            </View>
        )
    }
}