import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Redux/store.jsx";
import { Toaster } from "react-hot-toast";
import Mainpage from "./Components/Mainpage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <App />
      {/* <Toaster /> */}
    </Provider>
  
);
