// Dependencies
import React from 'react';
import GalleryList from '../GalleryList/GalleryList';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div data-testid="app">
      <div className='jumbotron'>
        <header>
          <h1>Alex's Gallery</h1>
        </header>
      </div>
      

      <GalleryList />
    </div>
  );
}

export default App;
