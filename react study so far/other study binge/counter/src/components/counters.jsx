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
  //You can create functions and pass it to the parameter to change the state of the component from outside
  handleDelete = (id) => {
      var list = this.state.counters.filter(c=> c.id !== id);
      this.setState({counters: list});
      
  }
  //Using properties is like using parameters. An easy way to understand this is imagine 
  //those components are classes (well they are) and those values inside are parameters and states are global variables
  //A more accurate answer is that state can be changed, while props cannot be changed, unless an update. 
  //States are local variables to that component only. Do not attempt to change the prop value within the component class
  //Children inside will pass on as an array depending on the order its going from top to bottom
  render() {
    return (
      <React.Fragment>
          {this.state.counters.map(counter => 
          <Counter key={counter.id} id={counter.id} value={counter.value} onDelete={this.handleDelete}>
            <h4>Counter #{counter.id}</h4>
            {/* Forcing this to always be one */}
            <p>There can only be {counter.id / counter.id}</p>
          </Counter>
          )}
      </React.Fragment>
    );
  }
}

export default Counters;
