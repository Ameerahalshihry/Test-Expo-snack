import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

// You can import from local files
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Tabs = createAppContainer(createBottomTabNavigator({
  home:Decks,
  AddDeck: NewDeck
})
)
export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         Hello test 2 
        </Text>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
