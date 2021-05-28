import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import { Route, BrowserRouter } from 'react-router-dom'
import Instrumento from './Instrumento';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <div className="container">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/instrumento/:id" component={Instrumento}></Route>
      </div>
    </BrowserRouter>

  );
}

export default App;
