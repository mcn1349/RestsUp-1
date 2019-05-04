import React, { Component } from "react";

class Counter extends Component {
  //This is basically your global variable
  state = {
    count: 0,
    imageUrl:
      "https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    address: {
      street: ""
    }
  };
  //You can add css stuff here, but its better to use the one You use custom made
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    return (
      //React.Fragment is like Div, but allows the component inside to group within the destinated div
      //Using {} within the HTML code, u can call functions, prop or state within to get the value you want
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        {/* it is optional to use style like this as well <span style={{fontSize: 15}}></span> */}
        <button className="btn btn-secondary btn-sm">Increment</button>
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
