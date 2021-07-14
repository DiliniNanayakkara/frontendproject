import React from 'react';
import '../../css/Dashbord.css';
import ModHomeInfo from './ModHomeInfo';
import ModeratorNavbar from './ModeratorNavbar';
import SlideMenu from './SlideMenu';




export default function Dashbord (){

  
      return (
            <div className="home">
            <ModeratorNavbar />
            <SlideMenu/>
            <ModHomeInfo />
           
           
          </div>

  
      );
      
  
}
