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
 * Golden Ratio for UI
 */
var GOLDEN_RATIO = 1.61803398875;

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
	    		<View style={styles.sideBarUpperRect} />
	    		<View style={styles.sideBarLowerRowParent}>
		    		<View style={styles.sideBarLowerRect} />
	    			<View style={styles.sideBarInnerColumn}>
	    				<View style={styles.sideBarInnerRow}>
				    		<View style={styles.sideBarInnerRowSquare} />
	    					<View style={styles.sideBarInnerInnerColumn}>
	    						<View style={styles.sideBarInnerInnerInnerRow}>
								<View style={styles.sideBarInnerInnerInnerRowSquare1} />
								<View style={styles.sideBarInnerInnerInnerRowSquare2} />
							</View>
							<View style={styles.sideBarInnerInnerLowerSquare} />
	    					</View>
	    				</View>
			    		<View style={styles.sideBarInnerLowerSquare} />
	    			</View>
	    		</View>
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
    flexDirection: 'column',
  },
  sideBarLowerRowParent: {
    flex: 1,
    backgroundColor: '#FF402C', // orange
    flexDirection: 'row',
  },
  sideBarUpperRect: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#8BC34A', // green
  },
  sideBarLowerRect: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#ffe11a', // yellow
  },
  sideBarInnerColumn: {
    flex: 1,
    backgroundColor: '#ffe11a', // yellow
  },
  sideBarInnerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FF402C', // orange
  },
  sideBarInnerRowSquare: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#2196F3', // blue
  },
  sideBarInnerInnerColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffe11a', // yellow
  },
  sideBarInnerInnerInnerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000', // black
  },
  sideBarInnerInnerInnerRowSquare1: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#FF402C', // orange
  },
  sideBarInnerInnerInnerRowSquare2: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#000000', // black
  },
  sideBarInnerInnerLowerSquare: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#FFFFFF', // white
  },
  sideBarInnerLowerSquare: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#FF402C', // orange
  },
  mainBody: {
    flex: GOLDEN_RATIO,
    backgroundColor: '#2196F3', // blue
  },
  mainBodyContent: {
  },
  nestContent: {
  },
});
