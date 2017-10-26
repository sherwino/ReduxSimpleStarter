import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../keys';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// this youtube key is coming from keys.js
const YT_KEY =  `${API_KEY}`;

// Create a new comoponent
// This comoponent should make some HTML
// This is a functional based component
// Functional components can have class based components inside
// Constructor Constructor what is your function?
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    // immediately search this on app startup
    YTSearch({ key: YT_KEY, term: 'surfboards'}, (videos) => {
      //when key and value is the same like { videos: videos } you could write it as { videos }
      this.setState({ videos });
    });

  }

// you will need to pass data from the parent App to the child component... like VideoList
// in react that is called passing props
  render () {

    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
  );
}
}


// Take the comoponents generated HTML and put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
