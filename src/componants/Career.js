import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Career extends Component {
	render() {
		return (
			<div>
				<div class="container my-3 bg-success text-white">
					<h1> Career as a Developer and Tester </h1>
					<p>
						Friends Infotech is a global IT and Engineering solutions provider
						catering to a diverse customer base.
					</p>
				</div>
				<Link to="/SignupFrom">
					<Button variant="primary" size="lg" block>
						Create Job Alert
					</Button>
				</Link>
			</div>
		);
	}
}

export default Career;
