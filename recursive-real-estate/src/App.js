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
        <nav>
          <ul>
            <span className="logo">
              <li>Recursive
           Realty</li>
            </span>

            <li>Home</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Contact</li>
            <li>Search</li>

            <span className="auth">
              <li>Sign In</li>
              <li>Register</li>
              </span>
          </ul>
        </nav>

        <h1>Recursive Real Estate</h1>



      </header>
    </div>
  );
}

export default App;
