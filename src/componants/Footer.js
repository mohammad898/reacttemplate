import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export class Footer extends Component {
	render() {
		return (
			<div>
				<div class="ffoot">
					<Link to="/Contact">Privacy</Link>
					<br />

					<Link to="/SignInFrom">Promotion</Link>
				</div>
			</div>
		);
	}
}

export default Footer;
