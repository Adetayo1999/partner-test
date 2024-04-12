// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { persistor, store } from "@common/redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Toaster position="top-right" />
        <App />
      </Router>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
