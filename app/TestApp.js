/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// import all activities
import { Activity1, Activity2, Activity3, Activity4, Activity5 } from './screens/AllScreens';

/*
 *
 * Project Composition and Exporting -- React Navigator's Stack Navigator
 *
 */

export default Project = StackNavigator({
	First: { 
		screen: Activity1
	},
	Second: {
		screen: Activity2
	},
	Third: { 
		screen: Activity3
	},
	Fourth: {
		screen: Activity4
	},
	Fifth: { 
		screen: Activity5
	}
  
});
