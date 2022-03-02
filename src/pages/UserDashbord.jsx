import React from "react";
import ReactDOM from "react-dom";

import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);



const data = {
  labels: ["Critical case", "Urgent case", "Errors", "Reviewed", "Success"],
  datasets: [
    {
      data: [30, 30, 5, 15, 20],
      backgroundColor: [
        "rgb(242,165,152)",
        "rgb(255,232,157)",
        "rgb(236,107,109)",
        "rgb(122,231,125)",
        "rgb(195,233,151)"
      ],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ],
 
  plugins: {
    labels: {
      render: "percentage",
      fontColor: ["green", "white", "red"],
      precision: 2
    },
  },
   text: "23%",
};

const data1 = {
  labels: ["Critical case", "Urgent case", "Errors", "Reviewed", "Success"],
  datasets: [
    {
      data: [20, 30, 35, 5, 20],
      backgroundColor: [
        "rgb(242,165,152)",
        "rgb(255,232,157)",
        "rgb(236,107,109)",
        "rgb(122,231,125)",
        "rgb(195,233,151)"
      ],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ],
 
  plugins: {
    labels: {
      render: "percentage",
      fontColor: ["green", "white", "red"],
      precision: 2
    },
  },
   text: "23%",
};
class UserDashbord extends React.Component {
  render() {
    return (
      <div>
        <div style={{width: "30%", float: "left"}}>
        <Doughnut
          data={data}
          options={{
            
            elements: {
              
              center: {
                legend: { display: true, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            },
            
          }}
        />
        </div>
        <div style={{width: "30%", float: "left"}}>
        <Doughnut
          data={data1}
          options={{
            
            elements: {
              
              center: {
                legend: { display: true, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            },
            
          }}
        />
        </div>
      </div>
    );
  }
}

export default UserDashbord;
