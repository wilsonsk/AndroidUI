/**
 * Activity 1: a list view of buttons each leading to the other 4 Android Activities
 * Utilized React-Navigator's StackNavigator
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// import default RN components
import { View, Button, Text } from 'react-native';

// import custom RN components
import FlexGrid from '../components/FlexGrid';

export default class GridLayout extends Component<{}>{
	constructor(props){
		super(props);
	}
	
	static navigationOptions = {
		title: "GridLayout",
	};

	render(){
		const { navigate } = this.props.navigation;
		return (
			<View>
				<FlexGrid />
			</View>
		);		
	}
}


