import logo from './logo.svg';
import './App.css';
import Country from './Component/Country/Country';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home';
import CountryDetails from './Component/CountryDetails/CountryDetails';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:name">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
