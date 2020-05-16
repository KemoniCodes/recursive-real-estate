import React from 'react';
import './scss/app.scss';
import Home from './components/Home';




function App() {
  return (
    <div className="App">
      <Home />
      <p>{window.token}</p>



    </div >
  );
}




export default App;
