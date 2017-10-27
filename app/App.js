/**
 * Android UI App for Oregon State University CS 496
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { FlatList, View, Text, Button } from 'react-native';

// import Activities/Screens for Project (Main Program (App))
import LinearH from './screens/LinearH';
import LinearV from './screens/LinearV';

class HomeScreen extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			data: [{activity: "Activity1", title: "HomeScreen"}, {activity: "Activity2", title: "Linear Layout Horizontal"}, {activity: "Activity3", title: "Linear Layout Verticle"}]
		}
	}

	static navigationOptions = {
		title: 'HomeScreen',
	};

	render(){
		const { navigate } = this.props.navigation;
		return(
			<View>
				<Text>OSU CS496 App: Home Screen</Text>
				<FlatList 
					data={this.state.data}
					keyExtractor={item => item.activity}
					renderItem={({ item }) => <View><Button onPress={() => navigate(item.activity)} title={item.title} /></View>}
				/>
			</View>
		);
	}
}

export default Project = StackNavigator({
	Activity1: {
		screen: HomeScreen
	},
	Activity2: {
		screen: LinearH
	},
	Activity3: {
		screen: LinearV
	}
});
