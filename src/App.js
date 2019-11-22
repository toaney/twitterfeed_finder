import React from 'react';
import './scss/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Nav from "./components/nav.js";
import Home from "./pages/home.js";

function App() {
  return (
    <div className="background">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
    
  );
}

export default App;