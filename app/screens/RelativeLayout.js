/**
 * Activity 1: a list view of buttons each leading to the other 4 Android Activities
 * Utilized React-Navigator's StackNavigator
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// import default RN components
import { View, Button, Text, StyleSheet } from 'react-native';

// import custom RN components
import FlexRelative from '../components/FlexRelative';

export default class RelativeLayout extends Component<{}>{
	constructor(props){
		super(props);
	}
	
	static navigationOptions = {
		title: "RelativeLayout",
	};

	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<FlexRelative />
			</View>
		);		
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
