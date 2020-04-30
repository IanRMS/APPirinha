import React from "react";
import "./App.css";
import logo from "../utils/imgs/logo.png";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

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
