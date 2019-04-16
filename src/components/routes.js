import React from "react";
//import ReactDOM from 'react-dom';
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import TasksComponent from "./TasksComponent";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tasks" component={TasksComponent} />
    </Switch>
  );
};

export default Routes;
