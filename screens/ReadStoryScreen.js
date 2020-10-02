import * as React from 'react';
import db from '../config';
import firebase from 'firebase';
import {Header} from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class ReadStory extends React.Component{
    constructor(){
        super()
        this.state = {
            allStories : []
        }
    }
    
componentDidMount = async ()=>{
    const query = await db.collection(Stories).get()
    query.docs.map((doc)=>{
        this.setState({
            allTransactions : [...this.state.allTransactions.doc.data()]
        })
    })
}
    render(){
        return(
            <View>
               <Header title = {"Read Story"} backgroundColor = 'yellow'/> 
                <FlatList 
                  data = {this.state.allStories}
                  renderItem = {({item})=>(
                      <View style = {{borderBottomWidth : 2}}>
                          <Text>{"Story Title : " + item.title}</Text>
                          <Text>{"Story Author : " + item.author}</Text>
                          <Text>{"Date : " + item.date.toDate()}</Text>
                          <Text>{"Story : " + item.story}</Text>
                      </View>
                  )}
                  keyExtractor = {(item, index)=> index.toString()}/>
            </View>
        )
    }
}