import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Snowfall from "react-snowfall";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Snowfall />
      <App />
    </Provider>
  </React.StrictMode>
);
