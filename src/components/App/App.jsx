// Dependencies
import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from '../About/About';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div data-testid="app">
        <div className='jumbotron'>
          <header>
            <h1>Alex's Gallery</h1>
          </header>
        </div>
        <Router>
            <Route path="/" exact>
              <GalleryList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
