import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import rootReducer from "./rootReducer";
import Routes from "./routes";
import "../global.css";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Routes />
          <ToastContainer />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
