import React from "react";

import { LoginPage, DashboardPage } from "./page";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./common/styles/theme";
import "./styles.css";
import PersistentDrawerLeft from "./common/components/AppBar";
import HelperRequestPage from "./page/help_request";
import { hot } from "react-hot-loader";
import VictimPage from "./page/victim";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Router>
          <PersistentDrawerLeft>
            <div
              style={{
                minWidth: "100vw",
                minHeight: "90vh"
              }}
            >
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/victim" component={VictimPage} />
                <Route
                  path="/helps"
                  component={() => <HelperRequestPage isHelp={true} />}
                />
                <Route
                  path="/report"
                  component={() => <HelperRequestPage isHelp={false} />}
                />
              </Switch>
            </div>
          </PersistentDrawerLeft>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default hot(module)(App);
