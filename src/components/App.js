import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import NotFound from "./NotFound";
import AboutPage from "./AboutPage";
import UserDetail from "./UserDetail";
import Alert from './Alert';
import GithubState from "../context/github/githubState";
import AlertState from "../context/alert/alertState";

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/user/:login" component={ UserDetail } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
