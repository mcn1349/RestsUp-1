import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      //React.Fragment is like Div, but allows the component inside to group within the destinated div
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
