import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Artworks from './components/pages/Artworks';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Pencilarts from './components/pages/Pencilarts';
import Exhibitions from './components/pages/Exhibitions';
import Dashbord from './components/pages/Dashbord';
import AddModarator from './components/pages/AddModarator';
import Users from './components/pages/Users';
import ArtistHome from './components/pages/ArtistHome';
import Orders from './components/pages/Orders';
import Artistartworks from './components/pages/Artistartworks';
import ArtistProduct from './components/pages/ArtistProduct';
import Customer_Home from './components/pages/Customer_Home';
import Customer_Artworks from './components/pages/Customer_Artworks';
import Customer_Artists from './components/pages/Customer_Artists';
import Customer_Products from './components/pages/Customer_Products';
import Customer_Pencilarts from './components/pages/Customer_Pencilarts';
import Customer_Exhibitions from './components/pages/Customer_Exhibitions';
import ArtistDashbord from './components/pages/ArtistDashbord';
import BuyerDashbord from './components/pages/BuyerDashbord';
import ModeratorHome from './components/pages/moderator/ModeratorHome';
import HelpCenter from './components/pages/moderator/HelpCenter';
import Advertiesment from  './components/pages/moderator/Advertiesment';
import Reports from './components/pages/moderator/Reports';
function App() {
  return (
    <Router>
     
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/artworks' component={Artworks} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/pencilarts' component={Pencilarts} />
        <Route path='/exhibitions' component={Exhibitions} />
        <Route path='/dashbord' component={Dashbord} />
        <Route path='/users' component={Users} />
        <Route path='/addmodarator' component={AddModarator} />
        <Route path='/artisthome' component={ArtistHome} />
        <Route path='/orders' component={Orders} />
        <Route path='/artistartworks' component={Artistartworks} />
        <Route path='/artistproduct' component={ArtistProduct} />
        <Route path='/customer_home' component={Customer_Home} />
        <Route path='/customer_artworks' component={Customer_Artworks} />
        <Route path='/customer_products' component={Customer_Products} />
        <Route path='/customer_artists' component={Customer_Artists} />
        <Route path='/customer_pencilarts' component={Customer_Pencilarts} />
        <Route path='/customer_exhibitions' component={Customer_Exhibitions} />
        <Route path='/artistdashbord' component={ArtistDashbord} />
        <Route path='/buyerdashbord' component={BuyerDashbord} />
        <Route path='/moderatorHome' component={ModeratorHome} />
        <Route path='/helpcenter' component={HelpCenter} />
        <Route path='/advertiesment' component={Advertiesment} />
        <Route path='/reports' component={Reports} />
       
        
      </Switch>
    </Router>
  );
}

export default App;