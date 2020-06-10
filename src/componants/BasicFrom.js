import React, { Component } from "react";

export class BasicFrom extends Component {
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
						<label htmlFor="exampleInputEmail1">First name</label>
						<input
							type="text"
							className="form-control"
							id="fname"
							onChange={this.handleChange}
							value={this.state.fname}
							placeholder="First name"
						/>
					</div>
					<div className="form-group text-left">
						<label htmlFor="exampleInputEmail1">Last name</label>
						<input
							type="text"
							className="form-control"
							id="fname"
							onChange={this.handleChange}
							value={this.state.lname}
							placeholder="Last name"
						/>
					</div>
					<div class="dropdown">
						<button
							type="button"
							class="btn btn-secondary dropdown-toggle"
							data-toggle="dropdown"
						>
							Select gender
						</button>
						<div class="dropdown-menu">
							<a class="dropdown-item" href="#">
								Male
							</a>
							<a class="dropdown-item" href="#">
								Female
							</a>
							<a class="dropdown-item" href="#">
								None
							</a>
						</div>
					</div>
					<div>
						<label htmlFor="Interested">Interested to learn:</label>
						<br />
						<div class="form-check-inline">
							<label class="form-check-label">
								<input type="checkbox" class="form-check-input" value="" />
								Selenium
							</label>
						</div>
						<div class="form-check-inline">
							<label class="form-check-label">
								<input type="checkbox" class="form-check-input" value="" />
								Java
							</label>
						</div>
						<div class="form-check-inline">
							<label class="form-check-label">
								<input type="checkbox" class="form-check-input" value="" />
								API Testing
							</label>
						</div>
					</div>
					<div>
						<label htmlFor="education">Higher education :</label>
						<br />
						<div class="form-check-inline">
							<label class="form-check-label">
								<input type="radio" class="form-check-input" name="optradio" />
								High school diploma
							</label>
						</div>
						<div class="form-check-inline">
							<label class="form-check-label">
								<input type="radio" class="form-check-input" name="optradio" />
								Bachelor's degree
							</label>
						</div>
						<div class="form-check-inline">
							<label class="form-check-label">
								<input type="radio" class="form-check-input" name="optradio" />
								Master's degree
							</label>
						</div>
					</div>
					<div>
						<div class="form-group">
							<label for="sel1">Knowledge label in computer(1 to 10):</label>
							<select class="form-control" id="sel1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</select>
						</div>
					</div>

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

					<div>
						<input type="file" class="form-control-file border" />
					</div>
					<div class="form-group">
						<label for="comment">Comment:</label>
						<textarea class="form-control" rows="5" id="comment"></textarea>
					</div>
					<br />
					<button type="submit" className="btn btn-success">
						Registered
					</button>
				</form>
			</div>
		);
	}
}
export default BasicFrom;
