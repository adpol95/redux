import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducers = (state, action) => {
  if (action.type === "MINUS") return {
      ...state,
      counter: state.counter - 1
    }
  else if (action.type === "PLUS") return {
    ...state,
    counter: state.counter + 1
  }

  return {
    counter: 0
  }
}
const store = createStore(reducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
