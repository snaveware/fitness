import React,{Component} from 'react'

import Header from './miniComponents/header'

class About extends Component
{
   render(){
      return(
         <div id="blog">
            <Header page='Blog' description = 'Inspiring Fitness'/>
            <div style={{width:1000,height:500}}></div>
         </div>
      )

   }
   
}
export default About
