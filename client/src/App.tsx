import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "emotion-theming";

import { client } from "@lib/apollo-client";
import { theme } from "@lib/theme-context";
import { Normalize } from "@lib/global-styles";

import { Home } from "pages/Home";
import { LogIn } from "pages/LogIn";
import { SignUp } from "pages/SignUp";

export const App: React.FC<{}> = hot(module)(() => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/" render={() => <h2>ой 404</h2>} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
});
