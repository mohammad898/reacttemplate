import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Tutorial extends Component {
	render() {
		return (
			<div>
				<h1>Please select our tutorial that you are interested</h1>
				<div>
					<Link to="/Testng">
						<button type="button" class="btn btn-success">
							TestNG
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Tutorial;
