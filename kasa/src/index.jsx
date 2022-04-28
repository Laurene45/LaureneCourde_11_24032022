import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Location from './pages/Location'     
//import App from './App';
//import About from './pages/About'
import Error404 from './pages/Error'

//import Footer from './components/Footer'
//import Header from './components/Header'

import './sass/main.scss';

// Route exact path="/" element={<Home />} => écriture nouvelle version Router
// REACT 18 : createRoot et hydrateRootvers react-dom/client

//permet aux composants d'utiliser les API sans extraire l'entrée spécifique au client. 
//si serveur restitue un composant, il n'a pas besoin d'extraire le code spécifique au client pour createRoot ou hydrateRoot.

// ReactRouter : bibliothèque tierce qui permet le routage entre nos pages Web.
// Routes  : les itinéraires des pages  ( path et render pour afficher les chemins)
// element reprend la page concernée.
// Link et to pour pouvoir basculer entre les pages sans recharger la page.


ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route path="/housing/:id" element={<Location />}/>

      <Route path='*' element={<Error404 />} />
      

    </Routes>
  </Router>,
);
