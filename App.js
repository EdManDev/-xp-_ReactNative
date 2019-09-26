//import liraries
import React, { Component } from "react";
import { createAppContainer } from "react-navigation";

import Travel from "./components/navigation/Travel";

//make this component available to the app
export default createAppContainer(Travel, {
	defaultNavigationOptions: {
		header: null
	}
});
