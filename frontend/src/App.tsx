import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ClosetPage from "./components/closet_page";
import DesignsPage from "./components/designs_page";
import FabricsPage from "./components/fabrics_page";
import Home from "./components/home_page";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (  
    <div className="App">
      <CssBaseline/>
      <Router>
        <Switch>
          <Route path="/closet">
              <ClosetPage />
          </Route>
          <Route path="/designs">
              <DesignsPage />
          </Route>
          <Route path="/fabrics">
              <FabricsPage />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
