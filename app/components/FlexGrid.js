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

export default class FlexGrid extends Component<{}> {
  constructor(props){
	  super(props);
	  this.state = {
		  data: [{content: '1'}, {content: '2'}, {content: '3'}, {content: '4'}, {content: '5'}]
	  }
  }

  render() {
    return (
//        <View style={styles.container}>
//            <FlatList
//	    	horizontal={true}
//		data={this.state.data}
//	    	keyExtractor={item => item.content}
//	        renderItem={({ item }) => <LayoutItem style={styles.content} itemContent={item.content}/>}
//	    />
//	</View>
	    <View style={styles.container}>
		    <Text style={styles.content}>{this.state.data[0].content}</Text>
		    <Text style={styles.content}>{this.state.data[1].content}</Text>
		    <Text style={styles.content}>{this.state.data[2].content}</Text>
		    <Text style={styles.content}>{this.state.data[3].content}</Text>
		    <Text style={styles.content}>{this.state.data[4].content}</Text>
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    fontSize: 20,
    minWidth: '50%',
    textAlign: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    backgroundColor: '#F5FCFF',
  },
});
