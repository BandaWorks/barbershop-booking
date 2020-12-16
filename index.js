import React from "react";
import ReactDOM from "react-dom";

/*
 * Initialize fake API server using MirageJS
 * @see https://miragejs.com/
 */
import "./api-fake";

import { App } from "./src/App";

const MOUNT_NODE = document.getElementById("react-root");
ReactDOM.render(<App />, MOUNT_NODE);
