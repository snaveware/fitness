import React,{Component} from 'react'
import Header from './miniComponents/header'

class TermsAndConditions extends Component
{
   render(){
      return(
         <div id="terms-and-conditions">
            <Header page = 'Terms and Conditions' description = 'read our terms and conditions'/>
            <div style={{width:1000,height:500}}></div>
         </div>
      )

   }
   
}
export default TermsAndConditions
