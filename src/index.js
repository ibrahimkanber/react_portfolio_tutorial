import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import {store} from "./redux/store/store"
import {Provider} from "react-redux"


ReactDOM.render(
    <BrowserRouter>
    <Provider store={store} >
      <Router />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);