import React from 'react';
import '../../css/Dashbord.css';
import DashbordInfo from '../../DashbordInfo';
import DashbordData from '../../DashbordData';
import DashbordData2 from '../../DashbordData2';
import { userData } from "../../../dummyData";
import ModeratorNavbar from './ModeratorNavbar';
import DashbordChart from '../../DashbordChart';



export default function Dashbord (){

  
      return (
            <div className="home">
            <ModeratorNavbar />
            <DashbordInfo />
            <DashbordChart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <h1>Moderatoe Home page</h1>
              <DashbordData/>
              <DashbordData2/>
            </div>
          </div>

  
      );
      
  
}
