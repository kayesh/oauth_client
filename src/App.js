import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About'
import BootstrapNavbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
    <div className="App">
    <BootstrapNavbar/>
      <main role="main" className="container">
        <div className="row">
        <Switch>
        <Route path="/" component={Login}></Route>
        <Route path="/home" exact component={Home}></Route> 
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route>
        </Switch>
        </div>
      </main>
    </div>
    </Router>
  );
}

export default App;
