import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import SignInFrom from "./SignInFrom";
//const ontacts = ({ match }) => <p>{match.params.id}</p>
class Services extends Component {
	render() {
		return (
			<div className="services-page">
				<h1> Services US componant works </h1>
				<Link to="/">Home</Link> <br />
				<Link to="/Contact">Contact</Link>
				<br />
				<Link to="/SignInFrom">SignInFrom</Link>
			</div>
		);
	}
}

export default Services;
