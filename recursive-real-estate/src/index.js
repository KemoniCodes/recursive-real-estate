import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom'
import './css/index.css';
// eslint-disable-next-line
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Properties from './pages/Properties';
import Agents from './pages/Agents';
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './components/Home';
import { AuthProvider } from './components/Auth';
import PrivateRoute from "./components/PrivateRoute";







ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch >
        <PrivateRoute exact path={['/home', '/']} component={Home} />
        <Route exact path={['/home', '/']} component={Home} />
        <Route path="/Properties" exact component={Properties} />
        <Route path="/Agents" exact component={Agents} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/Register" exact component={Register} />
      </Switch >
    </BrowserRouter>
  </AuthProvider>,

  document.getElementById('root')

);



