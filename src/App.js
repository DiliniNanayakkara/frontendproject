import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Artworks from './components/pages/Artworks';
import Products from './components/pages/Products';
import Artists from './components/pages/Artists';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Pencilarts from './components/pages/Pencilarts';
import Exhibitions from './components/pages/Exhibitions';


function App() {
  return (
    <Router>
     
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/artists' component={Artists} />
        <Route path='/products' component={Products} />
        <Route path='/artworks' component={Artworks} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/pencilarts' component={Pencilarts} />
        <Route path='/exhibitions' component={Exhibitions} />
        
      </Switch>
    </Router>
  );
}

export default App;