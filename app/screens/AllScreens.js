
/**
 * Sample React Native App
 * Utilize React-Navigator's StackNavigator
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// import custom RN components for use in Acitivities Apps
import Component1 from '../components/Component1';

/*
 *
 * "Android Activities" aka RN screens aka React JS apps
 *
 */

class Activity1 extends Component<{}> {
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		title: 'Activity1',
	};

	render(){
		return(
			<Component1 name="Baylor Wilson" textContent="Activity1 Test"/>
		);
	}
}

class Activity2 extends Component<{}> {
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		title: 'Activity2',
	};


	render(){
		return(
			<Component1 name="Baylor Wilson" textContent="Activity2 Test"/>
		);
	}
}

class Activity3 extends Component<{}> {
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		title: 'Activity3',
	};


	render(){
		return(
			<Component1 name="Baylor Wilson" textContent="Activity3 Test"/>
		);
	}
}

class Activity4 extends Component<{}> {
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		title: 'Activity4',
	};


	render(){
		return(
			<Component1 name="Baylor Wilson" textContent="Activity4 est"/>
		);
	}
}

class Activity5 extends Component<{}> {
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		title: 'Activity5',
	};


	render(){
		return(
			<Component1 name="Baylor Wilson" textContent="Activity5 Test"/>
		);
	}
}

module.exports = {
	Activity1: Activity1,
	Activity2: Activity2,
	Activity3: Activity3,
	Activity4: Activity4,
	Activity5: Activity5
}
