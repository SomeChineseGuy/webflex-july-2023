/* eslint-disable no-useless-constructor */
import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    // Always write Super otherwise this won't work
    super();
    // State in here! Always an object
    this.state = {
      counter: 0,
      username: "Alvin"
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    console.log('hello');
    this.setState({...this.state, counter: this.state.counter + 1})
  }

  decrement() {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      <div>
        <h1>This is a class of counter! The message is {this.props.message}</h1>
        <h2>The count is {this.state.counter}</h2>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default CounterClass;