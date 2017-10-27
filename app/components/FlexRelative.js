/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Platform, View, Text, StyleSheet } from 'react-native';

// import custom RN components
import LayoutItem from './LayoutItem';

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

export default class FlexRelative extends Component<{}> {
  constructor(props){
	  super(props);
	  this.state = {
		  data: [{content: '1'}, {content: '2'}, {content: '3'}, {content: '4'}, {content: '5'}]
	  }
  }

  render() {
    return (
	    <View style={styles.container}>
	    	<View style={styles.sideBar}>
	    	</View>
	    	<View style={styles.mainBody}>
	    	</View>
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
    flexDirection: 'row',
    backgroundColor: '#8BC34A', // green
  },
  sideBar: {
    flex: 1,
    backgroundColor: '#FF402C', // orange
  },
  mainBody: {
    flex: 3,
    backgroundColor: '#2196F3', // blue
  },
  sideBarContent: {
 
  },
  mainBodyContent: {
  },
  nestContent: {
  },
});
