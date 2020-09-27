import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Facebook from './assets/facebook.png'
import Twitter from './assets/twitter.png'
import Instagram from './assets/instagram.png'

class Footer extends Component
{
   render()
   {
      return(
         <div id="footer" >
            <div className="flexbox-row-wrap">
               <div className="mailing-list">
                  <p style={{color:'var(--link-color-1)'}}>Subscribe To Our Mailing List</p>
                  <form>
                  <input type="email"name="email"/>
                  <input type="submit" value="Subscribe" className="btn-1"/>
                  </form>
               </div>
               <ul>
                  <li id="footer-nav">
                     <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                     <Link to ="/terms-and-conditions">Terms and conditions</Link>
                  </li>
                  <li>
                     <Link to="/FAQs">FAQs</Link>
                  </li>
               </ul>
            </div>
            <ul className="flexbox-row-wrap">
                  <li className="flexbox-row-nowrap"style={{width:"max-content"}}>
                     <a href="facebook.com"><img src={Facebook} alt="Facebook icon" style={{height:50,width:50}}/></a>
                     <a href="twitter.com"><img src={Twitter} alt="twitter icon"style={{height:50,width:50}}/></a>
                     <a href="instagram.com"><img src={Instagram} alt="Instagram icon"style={{height:50,width:50}}/></a>
                  </li>
            </ul>
            <p style={{width:"100vw"}}>&copy; Fitness {new Date().getFullYear()}</p>
         </div>
      )
   }
}

export default Footer