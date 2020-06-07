import React, { Component } from "react";

export class SignInFrom extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			save: true,
		};

		//this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({ email: event.target.email });
		this.setState({ password: event.target.password });
		this.setState({ save: event.target.save });
	}
	handleSubmit(event) {
		alert("You have submitted the input successfully: " + this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group text-left">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="email"
							onChange={this.handleChange}
							value={this.state.email}
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>

						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group text-left">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={this.state.password}
							onChange={this.handleChange}
							placeholder="Password"
						/>
					</div>
					<label>
						Save user ID:
						<input
							name="save"
							type="checkbox"
							checked={this.state.save}
							onChange={this.handleChange}
						/>
					</label>
					<br />

					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default SignInFrom;
