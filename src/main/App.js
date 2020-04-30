import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Routes />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
