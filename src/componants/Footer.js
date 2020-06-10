import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export class Footer extends Component {
	render() {
		return (
			<div class="footer-page">
				<div class="d-flex">
					<div class="p-2 .bg-secondary flex-fill">Flex item 2</div>
					<div class="p-2 .bg-secondary flex-fill">Flex item 3</div>
					<div class="p-2 .bg-secondary flex-fill">Flex item 3</div>
				</div>
			</div>
		);
	}
}

export default Footer;
