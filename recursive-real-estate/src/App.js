import React from 'react';

// import { Switch, Route } from 'react-router-dom'
import './scss/app.scss';
import ContactNav from './components/ContactNav'
import Main from './components/Main'
import MainNav from './components/MainNav'
import SearchBar from './components/SearchBar';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import Interiors from './components/Interiors';
import Destinantions from './components/Destinations';







function App() {
  return (
    <div className="App">
      <ContactNav />
      
      <Main />
      
      <MainNav />

      <SearchBar />

      <Slideshow />

      <Destinantions />

      <Interiors />

      <Footer />

    </div >


  );
}



export default App;
