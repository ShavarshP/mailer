import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";


export let restart = (stat) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
      login={stat.login}
      names={stat.namesParticipants}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
