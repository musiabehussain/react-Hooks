import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incerement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incerement}>click{this.state.counter}</button>
      </div>
    );
  }
}
