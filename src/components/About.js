import React,{Component} from 'react'
import Header from './miniComponents/header'
import Footer from './Footer'

class About extends Component
{
   render(){
      return(
         <div id="about">
            <Header page='About' description = 'About Us'/>
         <div style={{width:1000,height:500}}></div>
         </div>
      )

   }
   
}
export default About
