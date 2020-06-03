import React from 'react';
import ReactDOM from 'react-dom';  


import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'  
  

import './index.css';
import Home from './App';
import About from './componants/About'
import Training from './componants/Training'
import Services from './componants/Services'
import Career from './componants/Career'
import Contact from './componants/Contact'
import Notfound from './componants/Notfound' 
 
import * as serviceWorker from './serviceWorker';

//const Home = lazy(() => import('./App'));  
//const About = lazy(() => import('./componants/About'));  
//const Training = lazy(() => import('./componants/Training'));






const routing = (  
    <Router>  
      <div className='Nava'>  
       
        <ul>  
          <li>  
            <NavLink to="/" exact activeStyle={  
               {color:'red'}  
            }>HOME</NavLink>  
          </li>  
          <li>  
            <NavLink to="/About" exact activeStyle={  
               {color:'green'}  
            }>ABOUT US</NavLink>  
          </li>  
          <li>  
            <NavLink to="/Services" exact activeStyle={  
               {color:'magenta'}  
            }>SERVICES</NavLink>  
          </li> 
          <li>  
            <NavLink to="/Training" exact activeStyle={  
               {color:'magenta'}  
            }>TRAINING</NavLink>  
          </li> 
          <li>  
            <NavLink to="/Career" exact activeStyle={  
               {color:'magenta'}  
            }>CAREER</NavLink>  
          </li> 
          <li>  
            <NavLink to="/Contact" exact activeStyle={  
               {color:'magenta'}  
            }>CONTACT US</NavLink>  
          </li>  
        </ul> 
         
         <Switch> 
         <Route exact path="/" component={Home} />
         <Route exact path="/MyApp" component={Home} />  
        <Route path="/About" component={About} />  
        <Route path="/Services" component={Services} /> 
        <Route path="/Career" component={Career} />
        <Route path="/Training" component={Training} />
        <Route path="/Contact" component={Contact} />  
        <Route component={Notfound} />  
      </Switch>
       
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
