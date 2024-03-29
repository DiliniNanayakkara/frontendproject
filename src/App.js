import React from "react";

import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Roles from "./components/pages/Roles";
import Artworks from "./components/pages/Artworks";
import ArtworksDrawing from "./components/pages/ArtworksDrawing";
import ArtworkRequest from "./components/pages/ArtworkRequest";
import ArtworkDetail from "./components/pages/ArtworkDetail";
import ArtworksFineart from "./components/pages/ArtworksFineart";
import Artist_Profile_Edit from "./components/pages/Artist_Profile_Edit";
import ArtworksHistorical from "./components/pages/ArtworksHistorical";
import ArtworksPainting from "./components/pages/ArtworksPainting";
import Products from "./components/pages/Products";
import ProductsBrushes from "./components/pages/ProductsBrushes";
import ProductDetail from "./components/pages/ProductDetail";
import ProductsCanvas from "./components/pages/ProductsCanvas";
import ProductsEasels from "./components/pages/ProductsEasels";
import ProductsSupplies from "./components/pages/ProductsSupplies";
import Payment from "./components/pages/Payment";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Pencilarts from "./components/pages/Pencilarts";
import Exhibitions from "./components/pages/Exhibitions";
import Dashbord from "./components/pages/Dashbord";
import AddModarator from "./components/pages/AddModarator";
import Users from "./components/pages/Users";
import ArtistHome from "./components/pages/ArtistHome";
import Orders from "./components/pages/Orders";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import ViewArtist from "./components/pages/ViewArtist";
import Artistartworks from "./components/pages/Artistartworks";
import ArtistArtworkDetail from "./components/pages/ArtistArtworkDetail";
import ArtistArtworkRequest from "./components/pages/ArtistArtworkRequest";
import ArtistProductDetail from "./components/pages/ArtistProductDetail";
import Artistartworkshistorical from "./components/pages/Artistartworkshistorical";
import Artistartworksfineart from "./components/pages/Artistartworksfineart";
import Artistartworksdrawing from "./components/pages/Artistartworksdrawing";
import Artistartworkspainting from "./components/pages/Artistartworkspainting";
import ArtworkUpload from "./components/pages/ArtworkUpload";
import ArtworkCart from "./components/pages/ArtworkCart";
import ArtistProduct from "./components/pages/ArtistProduct";
import ArtistProductBrushes from "./components/pages/ArtistProductBrushes";
import ArtistProductCanvas from "./components/pages/ArtistProductCanvas";
import ArtistProductSupplies from "./components/pages/ArtistProductSupplies";
import ArtistProductEasels from "./components/pages/ArtistProductEasels";
import ArtworkDeliveryDetails from "./components/pages/ArtworkDeliveryDetails";
import DeliveryDetails from "./components/pages/DeliveryDetails";
import Customer_Home from "./components/pages/Customer_Home";
import Customer_Artworks from "./components/pages/Customer_Artworks";
import Customer_Artists from "./components/pages/Customer_Artists";
import Customer_Products from "./components/pages/Customer_Products";
import Customer_Pencilarts from "./components/pages/Customer_Pencilarts";
import ArtworkCheckout from "./components/pages/ArtworkCheckout";
import Customer_Exhibitions from "./components/pages/Customer_Exhibitions";
import ArtistDashbord from "./components/pages/ArtistDashbord";
import BuyerDashbord from "./components/pages/BuyerDashbord";
import ModeratorHome from "./components/pages/moderator/ModeratorHome";
import HelpCenter from "./components/pages/moderator/HelpCenter";
import Advertiesment from "./components/pages/moderator/Advertiesment";
import Reports from "./components/pages/moderator/Reports";
import Customized_Artist from "./components/pages/Customized_Artist";
import Artist_Profile from "./components/pages/Artist_Profile";
import Customer_Profile from "./components/pages/Customer_Profile";

import NewUsersChart from "./components/pages/moderator/NewUsersChart";
import ProductChart from "./components/pages/moderator/ProductsChart";
import SoldArtworks from "./components/pages/moderator/SoldArtworks";
import QuesSubmission from "./components/pages/moderator/QuesSubmission";
import RecivedArtworksChart from "./components/pages/moderator/RecivedArtwoksChart";
import ReternItemChart from "./components/pages/moderator/RetrnItemChart";
import Moderator_Profile from "./components/pages/moderator_profile";
import Advertisement_upload from "./components/pages/Advertisement_upload";
import AutherizeRoute from "./common/AutherizeRoute";

import Portofolio from "./components/pages/Portofolio";
import Customizeart from "./components/pages/Customizeart";
import Createexhibition from "./components/pages/Createexhibition";
import Watchexhibition from "./components/pages/Watchexhibition";
import c_home from "./components/pages/c_home";
import a_home from "./components/pages/a_home";
import SignUpBuyer from "./components/pages/SignUpBuyer";
import BuyerSignUp from "./components/pages/BuyerSignUp";
import Pencilartist_profile from "./components/pages/pencilartist_profile";
import StaffSignUp from "./components/pages/StaffSignUp";
import ArtistdashbordOrders from "./components/artistComponents/artistDashboard_orders";
import addrow from "./components/pages/addrow";
import editgig from "./components/pages/editgig";
import artists from "./components/pages/artists";
import buyerexhibition from "./components/pages/buyerexhibition";
import buyerartists from "./components/pages/buyerartists";
import viewartists from "./components/pages/viewartists";
import viewexhibition from "./components/pages/viewexhibition";
import viewerArtistprof from "./components/pages/viewerArtistprof";
import MessageWindow from "./components/messageComponent/MessageWindow";
import MessageWindow2 from "./components/messageComponent/MessageWindow2";
import ComplainViewMod from "./components/pages/moderator/ComplainViewMod";
import BuyerArtistProf from "./components/pages/BuyerArtistProf";

//*******************************Moderator */
import FnQ from "./components/pages/moderator/FnQ";
//import Complaints from "./components/pages/moderator/Complaints";
import Complaints from "./components/pages/moderator/Complaints";
import AddNewItem from "./components/pages/moderator/AddNewItem";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/deliverydetails" component={DeliveryDetails} />
        <Route
          path="/artworkdeliverydetails"
          component={ArtworkDeliveryDetails}
        />
        <Route path="/addrow" component={addrow} />
        <Route path="/" exact component={Home} />
        <Route path="/roles" component={Roles} />
        <Route path="/buyerexhibition" component={buyerexhibition} />
        <Route path="/viewerArtistprof" component={viewerArtistprof} />
        <Route path="/viewehibition" component={viewexhibition} />
        <Route path="/viewartists" component={viewartists} />
        <Route path="/buyerartists" component={buyerartists} />
        <Route path="/editgig" component={editgig} />
        <Route path="/BuyerSignUp" component={BuyerSignUp} />
        <Route path="/products" component={Products} />
        <Route path="/artists" component={artists} />
        <Route path="/payment" component={Payment} />
        <Route path="/productdetail" component={ProductDetail} />
        <Route path="/productsbrushes" component={ProductsBrushes} />
        <Route path="/productscanvas" component={ProductsCanvas} />
        <Route path="/productseasels" component={ProductsEasels} />
        <Route path="/productssupplies" component={ProductsSupplies} />
        <Route path="/cart" component={Cart} />
        <Route path="/viewartist" component={ViewArtist} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/artworks" component={Artworks} />
        <Route path="/artworkcart" component={ArtworkCart} />
        <Route path="/artworksdrawing" component={ArtworksDrawing} />
        <Route path="/artworkdetail" component={ArtworkDetail} />
        <Route path="/artworkrequest" component={ArtworkRequest} />
        <Route path="/artworksfineart" component={ArtworksFineart} />
        <Route path="/artworkshistorical" component={ArtworksHistorical} />
        <Route path="/artworkspainting" component={ArtworksPainting} />
        <Route path="/artworkupload" component={ArtworkUpload} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/pencilarts" component={Pencilarts} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/users" component={Users} />
        <Route path="/addmodarator" component={AddModarator} />
        <Route path="/artisthome" component={ArtistHome} />
        <Route path="/orders" component={Orders} />
        <Route path="/artistartworks" component={Artistartworks} />
        <Route path="/SignUpBuyer" component={SignUpBuyer} />
        <Route path="/StaffSignUp" component={StaffSignUp} />

        <Route path="/Artist_Profile_Edit" component={Artist_Profile_Edit} />

        <Route path="/ArtistdashbordOrders" component={ArtistdashbordOrders} />
        <Route path="/artistartworkdetail" component={ArtistArtworkDetail} />
        <Route path="/artistartworkrequest" component={ArtistArtworkRequest} />
        <Route path="/artistproductdetail" component={ArtistProductDetail} />
        <Route
          path="/artistartworkshistorical"
          component={Artistartworkshistorical}
        />
        <Route
          path="/artistartworksfineart"
          component={Artistartworksfineart}
        />
        <Route
          path="/artistartworksdrawing"
          component={Artistartworksdrawing}
        />
        <Route
          path="/artistartworkspainting"
          component={Artistartworkspainting}
        />
        <Route path="/artistproduct" component={ArtistProduct} />
        <Route path="/artistproductbrushes" component={ArtistProductBrushes} />
        <Route path="/artistproductcanvas" component={ArtistProductCanvas} />
        <Route
          path="/artistproductsupplies"
          component={ArtistProductSupplies}
        />

        <Route path="/BuyerArtistProf" component={BuyerArtistProf} />
        <Route path="/artworkcheckout" component={ArtworkCheckout} />
        <Route path="/artistproducteasels" component={ArtistProductEasels} />
        <Route path="/customer_home" component={Customer_Home} />
        <Route path="/customer_artworks" component={Customer_Artworks} />
        <Route path="/customer_products" component={Customer_Products} />
        <Route path="/customer_artists" component={Customer_Artists} />
        <Route path="/customer_pencilarts" component={Customer_Pencilarts} />
        <Route path="/customer_exhibitions" component={Customer_Exhibitions} />
        <AutherizeRoute path="/artistdashbord" component={ArtistDashbord} />
        <Route path="/buyerdashbord" component={BuyerDashbord} />
        <Route path="/moderatorHome" component={ModeratorHome} />
        <Route path="/helpcenter" component={HelpCenter} />
        <Route path="/advertiesment" component={Advertiesment} />
        <Route path="/reports" component={Reports} />
        <Route path="/customized_artist" component={Customized_Artist} />
        <Route path="/artist_profile" component={Artist_Profile} />
        <Route path="/customer_profile" component={Customer_Profile} />
        <Route path="/complaints" component={Complaints} />
        <Route path="/c_home" component={c_home} />
        <Route path="/a_home" component={a_home} />
        <Route path="/pencilartist_profile" component={Pencilartist_profile} />
        <Route path="/newuserchart" component={NewUsersChart} />
        <Route path="/productchart" component={ProductChart} />
        <Route path="/soldartworksreport" component={SoldArtworks} />
        <Route path="/questionsubmitform" component={QuesSubmission} />
        <Route path="/recivedartworkschart" component={RecivedArtworksChart} />
        <Route path="/returnitemchart" component={ReternItemChart} />
        <Route path="/moderator_profile" component={Moderator_Profile} />
        <Route path="/advertisement_upload" component={Advertisement_upload} />
        <Route path="/artistsmessage" component={MessageWindow} />
        <Route path="/artistsmessage2" component={MessageWindow2} />
        <Route path="/complainviewmod" component={ComplainViewMod} />

        {/* <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/artworks" component={Artworks} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/pencilarts" component={Pencilarts} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/users" component={Users} />
        <Route path="/addmodarator" component={AddModarator} />
        <Route path="/artisthome" component={ArtistHome} />
        <Route path="/orders" component={Orders} />
        <Route path="/artistartworks" component={Artistartworks} />
        <Route path="/artistproduct" component={ArtistProduct} />
        <Route path="/customer_home" component={Customer_Home} />
        <Route path="/customer_artworks" component={Customer_Artworks} />
        <Route path="/customer_products" component={Customer_Products} />
        <Route path="/customer_artists" component={Customer_Artists} />
        <Route path="/customer_pencilarts" component={Customer_Pencilarts} />
        <Route path="/customer_exhibitions" component={Customer_Exhibitions} />
        <Route path="/artistdashbord" component={ArtistDashbord} />
        <Route path="/buyerdashbord" component={BuyerDashbord} />
        <Route path="/moderatorHome" component={ModeratorHome} />
        <Route path="/helpcenter" component={HelpCenter} />
        <Route path="/advertiesment" component={Advertiesment} />
        <Route path="/reports" component={Reports} />
        <Route path="/customized_artist" component={Customized_Artist} />
        <Route path="/artist_profile" component={Artist_Profile} />
        <Route path="/customer_profile" component={Customer_Profile} /> */}
        <Route path="/portofolio" component={Portofolio} />
        {/* <Route path="/complaints" component={Complaints} /> */}
        <Route path="/createexhibition" component={Createexhibition} />
        <Route path="/customizeart" component={Customizeart} />
        <Route path="/watchexhibition" component={Watchexhibition} />

        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/artworks" component={Artworks} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/pencilarts" component={Pencilarts} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/users" component={Users} />
        <Route path="/addmodarator" component={AddModarator} />
        <Route path="/artisthome" component={ArtistHome} />
        <Route path="/orders" component={Orders} />
        <Route path="/artistartworks" component={Artistartworks} />
        <Route path="/artistproduct" component={ArtistProduct} />
        <Route path="/customer_home" component={Customer_Home} />
        <Route path="/customer_artworks" component={Customer_Artworks} />
        <Route path="/customer_products" component={Customer_Products} />
        <Route path="/customer_artists" component={Customer_Artists} />
        <Route path="/customer_pencilarts" component={Customer_Pencilarts} />
        <Route path="/customer_exhibitions" component={Customer_Exhibitions} />
        <Route path="/artistdashbord" component={ArtistDashbord} />
        <Route path="/buyerdashbord" component={BuyerDashbord} />
        <Route path="/moderatorHome" component={ModeratorHome} />
        <Route path="/helpcenter" component={HelpCenter} />
        <Route path="/advertiesment" component={Advertiesment} />
        <Route path="/reports" component={Reports} />
        <Route path="/customized_artist" component={Customized_Artist} />
        <Route path="/artist_profile" component={Artist_Profile} />
        <Route path="/customer_profile" component={Customer_Profile} />

        {/* //***********MODERATOR************/}
        <Route path="/fnq" component={FnQ} />
        <Route path="/modeHome" component={ModeratorHome} />
        <Route path="/addNewItem" component={AddNewItem} />
      </Switch>
    </Router>
  );
}

export default App;
