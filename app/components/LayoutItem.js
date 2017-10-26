import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

export default class LayoutItem extends Component<{}>{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Text style={this.props.style}>{this.props.itemContent}</Text>
		);
	}
}
