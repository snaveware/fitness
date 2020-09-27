import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route }  from 'react-router-dom'
import Navbar from './components/miniComponents/Navbar'
import Home from "./components/Home" 
import About from './components/About'
import Videos from './components/Videos'
import Blog from './components/Blog'
import FAQs from './components/FAQS'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (   
      <Router>
      <Navbar className="navbar-index-styles"/>
        <Route path="/" exact component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/about" component={About}/>
        <Route path="/videos" component={Videos}/>
        <Route path="/FAQs" component = {FAQs}/>
        <Route path = "/terms-and-conditions" component = {TermsAndConditions}/>
        <Route path = "/privacy-policy" component = {PrivacyPolicy}/>
        <Route path = "/contact" component = {Contact}/> 
        <Footer/>
      </Router>
  );
}

export default App;
