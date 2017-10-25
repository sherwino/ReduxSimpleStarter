import React, { Component } from 'react';


// this is a functional component
// this component is not aware of state changes
// const SearchBar = () => {
//   return <input />;
// };

// class components are used for some kind of internal record keeping (two-way communication)
// get all of the functionality from the React.Component class
// we have to define a render method on every class
// if you import { Component } above you don't have to extends React.Component
// you could just extends Component
// component has its own constructor function

class SearchBar extends Component {

// this is how we initialize state in a class based component
// all javascript classes have constructors
// the first and only function called in a new instance
// it initialize variables and state
constructor(props) {
  //super is a parent method of Component
  super(props);
// initialize a new object and assign it to state
// we are recording the term to state
// "term" could be named whatever, it is a property
// this.state = object....
// only inside the constructor function we change state like this.

  this.state = { term: 'Starting Value'};
}

  render() {
    // you need to return some JSX
    // whenever a user interacts with an html element like an input it triggers a onChange event
    // this is standard HTML
    // wrap javascript variable in curly braces
    // always use setState to change the values of the state
    // don't use this.state.term = event.target.value
    //don't forget all javascript variable need to be in curlys
    return (
      <div>
        <input 
          value = { this.state.term }
          onChange={ event => this.setState({ term: event.target.value })} />
          <pre>Value of the input: { this.state.term }</pre>
      </div>
    );
  }
}

// event listener --- name it something obvious
// the event
  // onInputChange(event) {
  //   // get whatever is typed into the input and console log the value
  //   console.log(event.target.value);
  // }


export default SearchBar;

// state is a javascript object that is used to record and responds to a users event
// each class based component has it's own state object
// whenever a state changes the component re-renders...along with its children.
// to initialize the state
