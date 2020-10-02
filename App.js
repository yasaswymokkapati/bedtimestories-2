import * as React from 'react';
import ReadStory from './screens/ReadStoryScreen';
import WriteStory from './screens/WriteStoryScreen';
import LoginScreen from './screens/LoginScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
    </View>
  );
}
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : {screen : LoginScreen},
  TabNavigator : {screen : TabNavigator},
})

const TabNavigator = createBottomTabNavigator({

  Read : {screen : ReadStory},
  Write : {screen : WriteStory}

},
{
  defaultNavigationOptions : ({})=>({
    tabBarIcon : ({})=>{
      const routeName = navigation.state.routeName

      if(routeName === 'Read'){
        return(
          <Image 
          source = {require('./PRO+C70+Images/read.png')}
          style = {{width : 40, height : 40}}/>
        )
      }
      else if(routeName === 'Write'){
        return(
          <Image 
          source = {require('./PRO+C70+Images/write.png')}
          style = {{width : 40, height : 40}}/>
        )
      }
    }
  })
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
