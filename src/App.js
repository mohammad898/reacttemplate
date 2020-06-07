import React, { Component } from "react";

import "./App.css";
//import First from './componants/First'
////import Nav from './componants/Nav'
import Product from "./componants/Services";
import Second from "./componants/Second";

import { Link } from "react-router-dom";
import Footer from "./componants/Footer";
import SignInFrom from "./componants/SignInFrom";
import SignupFrom from "./componants/SignupFrom";
class App extends Component {
	render() {
		return (
			<div>
				<div className="p">
					<Second />
				</div>

				<div>
					<Link to="/SignupFrom">
						<button type="button" class="btn btn-primary">
							Sign UP
						</button>
					</Link>
					<br />
					<Link to="/SignInFrom">
						<button type="button" class="btn btn-success">
							SignIn
						</button>
					</Link>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
