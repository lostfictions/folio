import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// can't register a service worker -- we're not on an https domain.
// import registerServiceWorker from "./registerServiceWorker";
// registerServiceWorker();
