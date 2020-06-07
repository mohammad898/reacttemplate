import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<nav>
			<div className="Nava">
				<ul>
					<li>
						<NavLink to="/" exact activeStyle={{ color: "red" }}>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/About" exact activeStyle={{ color: "red" }}>
							ABOUT US
						</NavLink>
					</li>
					<li>
						<NavLink to="/Services" exact activeStyle={{ color: "red" }}>
							SERVICES
						</NavLink>
					</li>
					<li>
						<NavLink to="/Training" exact activeStyle={{ color: "red" }}>
							TRAINING
						</NavLink>
					</li>
					<li>
						<NavLink to="/Career" exact activeStyle={{ color: "red" }}>
							CAREER
						</NavLink>
					</li>
					<li>
						<NavLink to="/Contact" exact activeStyle={{ color: "red" }}>
							CONTACT US
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Header;
