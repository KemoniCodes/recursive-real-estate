import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './css/app.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="contact-nav">
          <ul>
            <li><h4>Contact Us</h4></li>
            <li>(555)-555-5555</li>
            <li><i class="fab fa-linkedin"></i></li>
            <li><i class="fab fa-facebook-square"></i></li>
            <li><i class="fab fa-twitter-square"></i></li>
            <li><i class="fab fa-instagram"></i></li>
          </ul>
        </nav>
        <h1>Recursive Real Estate</h1>
        <h3>International Luxury Realty</h3>
        <nav className="main-nav">
          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Contact</li>

            <div className="auth">
              <li>Sign In <i class="fas fa-chevron-down"></i></li>
              <li>Register</li>
            </div>
          </ul>
        </nav>

      </header>

      <div className="search-bar">
        <input type="text" name="search" className="search" />
        <i class="fas fa-search"></i>
      </div>

      <div className="property-slideshow">
        <img src="estate-1.jpg" alt=""/>
        <img src="" alt=""/>
        <img src="" alt=""/>
        <img src="" alt=""/>
        <img src="" alt=""/>

      </div>





    </div>
  );
}



export default App;
