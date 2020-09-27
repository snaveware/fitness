import React,{Component} from 'react'
import Header from './miniComponents/header'

class Contact extends Component
{
   render(){
      return(
         <div id="contact">
         <Header page='contact' description = 'Contact Us'/>
         <div style={{width:1000,height:500}}></div>
         </div>
      )

   }
   
}
export default Contact
