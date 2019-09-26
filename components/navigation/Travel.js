//import liraries
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";

import List from "../screens/List";
import Article from "../screens/Article";
//make this component available to the app
export default createStackNavigator(
	{
		List,
		Article
	},
	{
		initialRouteName: "List",
		defaultNavigationOptions: {
			// header: null
			headerStyle: {
				borderBottomColor: "transparent",
				marginTop: 24,
				backgroundColor: "red"
			}
		}
	}
);
