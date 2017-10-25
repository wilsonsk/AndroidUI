/**
 * Android UI App for Oregon State University CS 496
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';

// import Activities/Screens for Project (Main Program (App))
import LinearVH from './screens/LinearVH';

export default Project = StackNavigator({
	First: {
		screen: HomeScreen
	}
	Second: {
		screen: LinearVH
	}
});

class HomeScreen extends Component<{}>{
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		title: 'Home Screen',
	};

	render(){
		return(
			<View>
				<Text>OSU CS496 App: Home Screen</Text>
				<Button onPress={() => navigate('LinearHV')} title="Activity 2" />
			</View>
		);
	}
}
