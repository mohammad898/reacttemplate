//import React from 'react';
import ReactDOM from 'react-dom';  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'  
import React, { Suspense, lazy } from 'react';  
import './index.css';

//import About from './componants/About'
import Product from './componants/Product'
//import Nav from './componants/Nav'
import First from './componants/First'
import Notfound from './componants/Notfound'  
import * as serviceWorker from './serviceWorker';

const Home = lazy(() => import('./App'));  
const About = lazy(() => import('./componants/About'));  
const Nav = lazy(() => import('./componants/Nav'));






const routing = (  
    <Router>  
      <div className='Nava'>  
       
        <ul>  
          <li>  
            <NavLink to="/" exact activeStyle={  
               {color:'red'}  
            }>Home</NavLink>  
          </li>  
          <li>  
            <NavLink to="/about" exact activeStyle={  
               {color:'green'}  
            }>About</NavLink>  
          </li>  
          <li>  
            <NavLink to="/product" exact activeStyle={  
               {color:'magenta'}  
            }>product</NavLink>  
          </li> 
          <li>  
            <NavLink to="/nav" exact activeStyle={  
               {color:'magenta'}  
            }>Nav</NavLink>  
          </li>  
          <li>  
            <NavLink to="/first" exact activeStyle={  
               {color:'magenta'}  
            }>First</NavLink>  
          </li>  
        </ul> 
        <Suspense fallback={<div>Loading...</div>}>  
         <Switch> 
         <Route exact path="/" component={Home} />  
        <Route path="/about" component={About} />  
        <Route path="/product" component={Product} /> 
        <Route path="/nav" component={Nav} />
        <Route path="/first" component={First} />  
        <Route component={Notfound} />  
      </Switch>
      </Suspense>   
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
