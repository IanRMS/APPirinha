import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import logo from "../utils/imgs/logo.png";
import "./App.css";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </Provider>
  );
}

export default App;
