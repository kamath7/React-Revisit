import React, { Component } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";

export class CounterClass extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}
//first arg connect -> mapreduxstate to props
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
//equivalent to useDispatch
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "increment" });
    },
    decrement: () => {
      dispatch({ type: "decrement" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
