// Dependencies
import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About';
import { Container } from "react-bootstrap";

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Router>
      <div data-testid="app">
        <div className='head'>
          <header>
            <h1>Alex's Gallery</h1>
          </header>
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        
          
          <Route path="/" exact>
            <GalleryList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        
      </div>
      </Router>
    </>
  );
}

export default App;
