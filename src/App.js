import React, { Component } from "react";

import "./App.css";
//import First from './componants/First'
////import Nav from './componants/Nav'
import Product from "./componants/Services";
import Second from "./componants/Home";

import { Link } from "react-router-dom";
import Footer from "./componants/Footer";
import SignInFrom from "./componants/SignInFrom";
import SignupFrom from "./componants/SignupFrom";
import Home from "./componants/Home";
class App extends Component {
	render() {
		return (
			<div className="p">
				<Home />
			</div>
		);
	}
}

export default App;
