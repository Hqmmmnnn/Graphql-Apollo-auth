import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";

const root = document.getElementById("root");

const render = () => {
  if (root) ReactDOM.render(<App />, root);
};

if (module.hot) {
  module.hot.accept("./App", function() {
    render();
  });
}

render();
