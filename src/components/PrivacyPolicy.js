import React,{Component} from 'react'
import ShapeDivider from './assets/shape-divider.png'
import Header from './miniComponents/header'

class PrivacyPolicy extends Component
{
   render(){
      return(
         <div id="privacy-policy">
            <Header page='Privacy Policy' description ='Our Privacy Policy'/>
            <div style={{width:1000,height:500}}></div>
         </div>
      )

   }
   
}
export default PrivacyPolicy
