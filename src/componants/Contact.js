import React, { Component } from "react";
class Contact extends Component {
	render() {
		return (
			<div class="container">
				<h2>Contact Us</h2>

				<table class="table table-hover">
					<thead>
						<tr>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Mohammad</td>
							<td>Haque</td>
							<td>Mohammadhaque898@gmail.com</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Contact;
