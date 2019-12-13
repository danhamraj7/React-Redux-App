import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer } from "./reducers";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();