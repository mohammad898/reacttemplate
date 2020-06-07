import React from "react";
import ReactDOM from "react-dom";

import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
} from "react-router-dom";

import "./index.css";
import Home from "./App";
import About from "./componants/About";
import Training from "./componants/Training";
import Services from "./componants/Services";
import Career from "./componants/Career";
import Contact from "./componants/Contact";
import SignupFrom from "./componants/SignupFrom";
import SignInFrom from "./componants/SignInFrom";
import Notfound from "./componants/Notfound";
import Footer from "./componants/Footer";
import Header from "./componants/Header";
import * as serviceWorker from "./serviceWorker";

//const Home = lazy(() => import('./App'));
//const About = lazy(() => import('./componants/About'));
//const Training = lazy(() => import('./componants/Training'));

const routing = (
	<Router>
		<div>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/MyApp" component={Home} />
				<Route path="/About" component={About} />
				<Route path="/Services" component={Services} />
				<Route path="/Career" component={Career} />
				<Route path="/Training" component={Training} />
				<Route path="/Contact" component={Contact} />
				<Route path="/SignupFrom" component={SignupFrom} />
				<Route path="/SignInFrom" component={SignInFrom} />
				<Route component={Notfound} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
