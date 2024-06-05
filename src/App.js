import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
      <button onClick={props.minus}>-</button>
      <div>{props.counter}</div>
      <button onClick={props.plus}>+</button>
      <h3>Hello UPDATE</h3>
    </div>
  );
}

const mapPropsToState = state => {
  return {
    counter: state.counter
  }
}

const mapStateDispatchToProps = dispatch => ({
    minus: () => dispatch({type: "MINUS"}),
    plus: () => dispatch({type: "PLUS"}),
})

export default connect(mapPropsToState, mapStateDispatchToProps)(App);
