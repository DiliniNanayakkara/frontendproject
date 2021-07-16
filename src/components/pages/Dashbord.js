import React from 'react';
import '../css/Dashbord.css';
import DashbordInfo from '../DashbordInfo';
import DashbordData from '../DashbordData';
import DashbordData2 from '../DashbordData2';
import { userData } from "../../dummyData";
import AdminNavbar from '../AdminNavbar';




export default function Dashbord (){

  
      return (
            <div className="home">
            <AdminNavbar />
            <DashbordInfo />
        
            <div className="homeWidgets">
              <DashbordData/>
              <DashbordData2/>
            </div>
          </div>

  
      );
      
  
}
