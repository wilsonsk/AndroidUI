/**
 * Activity 1: a list view of buttons each leading to the other 4 Android Activities
 * Utilized React-Navigator's StackNavigator
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// import necessary custom RN components
// import Component1 from '../components/';

// import default RN components
import { View, Button, Text } from 'react-native';

export default class LinearVH extends Component<{}>{
	constructor(props){
		super(props);
	}
	
	static navigationOptions = {
		title: "Activity2",
	};

	render(){
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>This is Activity 2 placeholder</Text>
			</View>
		);		
	}
}


