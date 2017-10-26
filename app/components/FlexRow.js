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

export default class FlexRow extends Component<{}> {
  constructor(props){
	  super(props);
	  this.state = {
		  data: [{content: 'Element 1'}, {content: 'Element 2'}, {content: 'Element 3'}, {content: 'Element 4'}, {content: 'Element 5'}]
	  }
  }

  render() {
    return (
        <View style={styles.container}>
	    <Text style={styles.content}>TEST</Text>
	</View>
//	    <View style={styles.container}>
//		    <Text style={styles.content}>{this.state.data[0].content}</Text>
//		    <Text style={styles.content}>{this.state.data[1].content}</Text>
//		    <Text style={styles.content}>{this.state.data[2].content}</Text>
//		    <Text style={styles.content}>{this.state.data[3].content}</Text>
//		    <Text style={styles.content}>{this.state.data[4].content}</Text>
//	    </View>
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
    minHeight: '10%',
    flexDirection: 'row',
    backgroundColor: '#FF402C',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
});
