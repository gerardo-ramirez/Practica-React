import React, { Component } from "react";

import "./App.css";

//importamos Route.
//import {BrowserRouter, Route } from 'react-router-dom';
//importamos componentes:
//import Main from './components/main';
import Navbar from "./components/navbar";

//import TasksComponent from "./components/TasksComponent";
import Routes from "./components/routes";
//import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
