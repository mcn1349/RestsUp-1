import React, { Component } from "react";

class Counter extends Component {
  //This is basically your global variable
  state = {
    count: 0,
    address: {
      street: ""
    }
  };
  render() {
    return (
      //React.Fragment is like Div, but allows the component inside to group within the destinated div
      //Using {} within the HTML code, u can call functions, prop or state within to get the value you want
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    // You can also take a global variable like this
    const { count } = this.state;
    //You can also return a JSX expression or you could do
    const green = <h1>Zero</h1>;
    return count === 0 ? green : count;
  }
}

export default Counter;
