import React, { Component } from "react";

export class Testng extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid">
					<blockquote class="blockquote">
						<p>
							TestNG is an automation testing framework in which NG stands for
							"Next Generation". TestNG is inspired from JUnit which uses the
							annotations (@).Using TestNG, we can generate a proper report, and
							we can easily come to know how many test cases are passed, failed,
							and skipped. we can execute the failed test cases separately.
						</p>
						<footer class="blockquote-footer">From guru99 website</footer>
					</blockquote>
				</div>
				<div class="container">
					<p>Advantages of TestNG </p>
					<ul>
						<li>Parallel testing is possible</li>
						<li>Cross-browser testing is possible</li>
						<li>TestNG allows us to execute the test cases separately</li>
						<li>
							Multiple test cases can be grouped easily by converting them into
							a testng.xml file, in which we can set the priority of each test
							case that determines which test case should be executed first.
						</li>
						<li>TestNG does not require main() method.</li>
						<li>Testng Generating HTML Reports</li>
					</ul>
				</div>
				<div class="container">
					<h4>TestNG methods</h4>
					<ul>
						<li>
							Priority <code>@Test(priority = 0, alwaysRun = true) </code>
						</li>
						<li>
							Groups
							<code>@Test (groups = {"smoke"}) </code>
						</li>
						testng.xml
						<pre>
							<groups>
								<run>
									<include name="smoke" />
								</run>
							</groups>
						</pre>
					</ul>
				</div>
			</div>
		);
	}
}

export default Testng;
