import React,{Component} from 'react'
import Header from './miniComponents/header'

class Videos extends Component
{
   render(){
      return(
         <React.Fragment id="videos">
         <Header page = 'videos' description = 'Workout Videos'/>
         <div style={{width:1000,height:500}}></div>
         </React.Fragment>

      )

   }
   
}
export default Videos
