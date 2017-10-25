import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// const fs = require('fs');
// require('dotenv').config();

// Be sure to upload this as an environemental variable.
const API_KEY =  process.env.REACT_APP_ENV;

// Create a new comoponent
// This comoponent should make some HTML
// This is a functional based component
// Functional components can have class based components inside
// Constructor Constructor what is your function?
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take the comoponents generated HTML and put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
