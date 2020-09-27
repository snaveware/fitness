import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import {withRouter} from 'react-router-dom';

class Navbar extends Component
{
   constructor(props)
   {
      super(props)
      this.state=
      {
         page:'/'
      }
   }
   
   render()
   {
      const className= this.props.className
      return (
         <nav id="navbar" className={className}>
            <Link to="/" id="logo">
               <img src={Logo}alt="Fitness"/>
            </Link>
            <ul>
               <li>
                  <Link to="/"className={this.state.page=== '/'?"active":'link'}>Home</Link>
               </li>
               <li>
                  <Link to="/blog"className={this.state.page=== '/blog'?"active":'link'}>Blog</Link>
               </li>
               <li>
                  <Link to="/videos"className={this.state.page=== '/videos'?"active":'link'}>Videos</Link>
               </li>          
               <li>
                  <Link to ="/contact" className= {this.state.page ==='/contact'?'active':'link'}>Contact</Link>
               </li>
               <li >
                  <Link to="/about"className={this.state.page=== '/about'?"active":'link'}>About</Link>
               </li>
            </ul>
            <ul id="account-nav-btns">
            <li className="btn-1"> Login</li>
            <li className="btn-2"> Join</li>
            </ul>
         </nav>
      )
   }
}

export default withRouter(Navbar)