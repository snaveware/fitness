import React,{Component} from 'react'
import Landing from './assets/landing.jpg'
import Footer from './Footer'

class Home extends Component
{
   render(){
      return(
         <React.Fragment>
         <section id="landing">
            <img src={Landing} alt="A person in gym"/>
            <div id="action">
               <h1>No Pain No Gain</h1>
               <p>Fight your way towards a healthier life</p>
               <a href="#" className="btn-2">More</a>
            </div>
         </section>
         <div className="user-count">
            <p >1000+</p>
             <p>Satisfied clients</p>
         </div>        
         </React.Fragment>
      )

   }
   
}
export default Home
