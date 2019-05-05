//Type imrc then tab will write this code automatically
import React, { Component } from "react";
import Counter from "./counter";
//Same as above, type CC for this code
class Counters extends Component {
  state = {
      counters: [
          {id: 1, value: 0},
          {id: 2, value: 5},
          {id: 3, value: 6},
          {id: 4, value: 7}
      ]
  };
  //Using properties is like using parameters. An easy way to understand this is imagine 
  //those components are classes (well they are) and those values inside are parameters and states are global variables
  render() {
    return (
      <React.Fragment>
          {this.state.counters.map(counter => 
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
          )}
      </React.Fragment>
    );
  }
}

export default Counters;
