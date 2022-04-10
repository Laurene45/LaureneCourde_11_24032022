import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import './index.css';
//import App from './App';
import About from './pages/About'
import Error404 from './pages/Error'
import Home from './pages/Home'
import Location from './pages/Location'

import Footer from './components/Footer'
import Header from './components/Header'

import './css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Route>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

