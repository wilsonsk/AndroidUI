/**
 * Activity 1: a list view of buttons each leading to the other 4 Android Activities
 * Utilized React-Navigator's StackNavigator
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// import default RN components
import { StyleSheet, View, Button, Text } from 'react-native';

// import custom RN components
import FlexColumn from '../components/FlexColumn';

export default class LinearV extends Component<{}>{
	constructor(props){
		super(props);
	}
	
	static navigationOptions = {
		title: "LinearV",
	};

	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<FlexColumn />
			</View>
		);		
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
