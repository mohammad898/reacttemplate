import React, { Component } from "react";

class Services extends Component {
	render() {
		return (
			<div class="container">
				<h2>Our services</h2>
				<p>
					Our company focuses majorly into providing Software Development
					Testing Consulting and Training Solutions .
				</p>

				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#myModal"
				>
					Learn more
				</button>

				<div class="modal fade" id="myModal">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">
									Software Development Testing Consulting Solutions .
								</h4>
								<button type="button" class="close" data-dismiss="modal">
									&times;
								</button>
							</div>

							<div class="modal-body">
								Friends Infotech is a global IT solutions provider based in the
								USA.The company focuses majorly into providing Software
								Development Testing Consulting and Training Solutions . We are
								Agile. We are always present with the right solutions at the
								right place and the right time to meet your requirements. Our
								offerings are IP oriented, tried and tested over time. We strive
								to ensure that our Clients are the front runners and equipped
								with latest technologies
							</div>

							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
