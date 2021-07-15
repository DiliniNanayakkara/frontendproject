import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import './ModHomebtns.css';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Sold Products',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      fontSize: 20,
      
      data: [30, 29, 80, 11, 56]
    }
  ]
}

export default class ProductChart extends React.Component {
  render() {
    return (
      <div width = {"100px"}  >
        <Bar
          data={state}
          options={{ maintainAspectRatio: false }}
        
          options={{
            title:{
              display:true,
              text:'Average sold products per month',
              fontSize:50
              
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
  
}