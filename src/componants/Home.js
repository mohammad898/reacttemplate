import React, { Component } from "react";
import { Link } from "react-router-dom";
class Second extends Component {
	render() {
		return (
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1> Welcome to Friends Infotech</h1>
					<p>
						Friends Infotech is a global IT solutions provider based in the
						USA.The company focuses majorly into providing Software Development
						Testing Consulting and Training Solutions . We are Agile. We are
						always present with the right solutions at the right place and the
						right time to meet your requirements. Our offerings are IP oriented,
						tried and tested over time. We strive to ensure that our Clients are
						the front runners and equipped with latest technologies
					</p>

					<div>
						<Link to="/SignInFrom">
							<button type="button" class="btn btn-primary">
								SignIn
							</button>
						</Link>
						<Link to="/SignupFrom">
							<button type="button" class="btn btn-success">
								Sign UP
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Second;
