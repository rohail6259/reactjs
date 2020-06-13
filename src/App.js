import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./components/users";
import Table from "./components/table";
import Form from "./components/form";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route path="/posts" component={Table}/>
          <Route path="/create/:id" component={Form}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
