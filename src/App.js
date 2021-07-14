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
import Dashbord from './components/pages/Dashbord';
import Admin01 from './components/pages/Admin01';
import Admin02 from './components/pages/Admin02';
import Admin03 from './components/pages/Admin03';
import Users from './components/pages/Users';
import ArtistHome from './components/pages/ArtistHome';
import Orders from './components/pages/Orders';
import Profile from './components/pages/Profile';
import Artist01 from './components/pages/Artist01';
import Customer_Home from './components/pages/Customer_Home';
import Customer_Artworks from './components/pages/Customer_Artworks';
import Customer_Artists from './components/pages/Customer_Artists';
import Customer_Products from './components/pages/Customer_Products';
import Customer_Pencilarts from './components/pages/Customer_Pencilarts';
import Customer_Exhibitions from './components/pages/Customer_Exhibitions';
import Customized_Artist from './components/pages/Customized_Artist';
import Artist_Profile from './components/pages/Artist_Profile';
import Customer_Profile from './components/pages/Customer_Profile';


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
        <Route path='/dashbord' component={Dashbord} />
        <Route path='/users' component={Users} />
        <Route path='/admin01' component={Admin01} />
        <Route path='/admin02' component={Admin02} />
        <Route path='/admin03' component={Admin03} />
        <Route path='/artisthome' component={ArtistHome} />
        <Route path='/orders' component={Orders} />
        <Route path='/profile' component={Profile} />
        <Route path='/Artist01' component={Artist01} />
        <Route path='/customer_home' component={Customer_Home} />
        <Route path='/customer_artworks' component={Customer_Artworks} />
        <Route path='/customer_products' component={Customer_Products} />
        <Route path='/customer_artists' component={Customer_Artists} />
        <Route path='/customer_pencilarts' component={Customer_Pencilarts} />
        <Route path='/customer_exhibitions' component={Customer_Exhibitions} />
        <Route path='/customized_artist' component={Customized_Artist} />
        <Route path='/artist_profile' component={Artist_Profile} />
        <Route path='/customer_profile' component={Customer_Profile} />
       
       
        
      </Switch>
    </Router>
  );
}

export default App;