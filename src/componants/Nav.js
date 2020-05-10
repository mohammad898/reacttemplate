import React, { Component } from 'react';
import  './mystyle.css';
import  './nav.css';

class Nav extends Component {  
    render() {  
       return ( 
         <div className='Nav'>   
           
         
             <ul>
             <li><a href="#home">Home</a></li>
         <li><a href="#news">News</a></li>
         <li><a href="#contact">Contact</a></li>
              </ul>
          
           
         </div>
       );  
    }  
 }  
 
 export default Nav;  