import React, { Component } from "react";
import { Link } from "react-router-dom";
class Training extends Component {
	render() {
		return (
			<div className="training-page">
				<div class="container-xl p-3 my-3 bg-info text-white">
					<h1> We are providing free Training and Job placemant </h1>
					<p>
						If you are interesded in free Training and Job placemant then fill
						up the registration from.
					</p>
				</div>
				<div>
					<Link to="/BasicFrom">
						<button type="button" class="btn btn-success active">
							Register
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Training;
