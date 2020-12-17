import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import stat from "./redux/state";

import { restart } from "./render";

restart(stat);


serviceWorker.unregister();
