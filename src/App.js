import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './header'; 
import Footer from './footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import Results from "./result";
import history from './history';
function App() {
  
  return (
    <Router history={history}>
    <div className="App">
      
      <Header />
      
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/result">
            <Results />
          </Route> 
          
        </Switch>
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
