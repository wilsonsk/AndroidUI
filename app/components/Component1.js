/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';


/*
 *
 * Example device dependent logic
 *
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*
 *
 * RN Component
 *
 */

export default class Component1 extends Component<{}> {
  constructor(props){
	  super(props);
	  this.state = {test: "Hello my friend, "};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
	    {this.state.test} {this.props.name}
        </Text>
        <Text style={styles.textContent}>
	    {this.props.textContent}
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

/*
 *
 * Style Sheet initialization and creation for this component
 *
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
