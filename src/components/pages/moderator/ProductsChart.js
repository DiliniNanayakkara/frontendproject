import React from 'react';
import {Bar} from 'react-chartjs-2';
import './ModHomebtns.css';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'New Users',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [30, 29, 80, 11, 56]
    }
  ]
}

export default class ProductChart extends React.Component {
  render() {
    return (
      <div className="itemcontainer" >
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average New Users per month',
              fontSize:20
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