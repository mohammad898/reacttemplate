import React, { Component } from 'react'; 

import './App.css';
//import First from './componants/First'
////import Nav from './componants/Nav'
import Product from './componants/Services'
import Second from './componants/Second'
import RegistrationForm from './componants/RegistrationForm'
class App extends Component {  
   render() {  
      return (  
         <div >
            <RegistrationForm/>
           <div className='p'>

           <Second />
           </div>

        
           
           
         </div> 
          
      );  
   }  
}  


export default App;  
