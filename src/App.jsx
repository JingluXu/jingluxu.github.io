import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Theme } from "./components/theme/Themes";
import { HelmetMeta } from "./HelmetMeta";

import { Home } from "./pages/Home";

const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <HelmetMeta />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};