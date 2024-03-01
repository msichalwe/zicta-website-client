'use client'
import {Chart, ChartDataset, registerables} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(...registerables);
Chart.register(ChartDataLabels);

import React, {Context} from "react";
import {Line} from "react-chartjs-2";

// Sample data for the chart
const data:ChartDataset<any> = {
    labels: ["", "2019", "2020", "2021", "2022", "2023", ""],
    datasets: [
        {
            label: "Overall",
            data: [,269.75, 277.57, 325.29, 391.88, 477.61, ],
            fill: false,
            borderColor: "#387ADF",
            borderDash: [3, 4],
            pointRadius: 9, // Adjust the size of the points (pins)
            pointStyle: 'rectRot',// Specify the dash pattern here
            pointBackgroundColor: 'white', // Change the fill color of the points to white
            borderCapStyle: 'round', // Make the line rounded
        },
    ],
};



const AverageRevenuePerUser = () => {
    return <Line data={data}

                 options={{
                     scales: {
                         y: {
                             position: 'left',
                             min: 0,
                             max: 600,
                             title: {
                                 display: true,
                                 text: 'ZMW'
                             }

                         },

                     },

                     responsive: true,
                     plugins: {
                         legend: {
                             position: "bottom",
                         },
                         title: {
                             display: true,
                             text: "AVERAGE REVENUE PER USER (ARPU) ANNUAL TRENDS BY MNO\n",
                         },
                         datalabels: {
                             color: 'black', // Set the color of the labels
                             anchor: 'end', // Position of the label relative to the point
                             align: 'top', // Position of the label relative to the point
                             formatter: (value: any, context: any) => {
                                 // Format the label as desired
                                 return value;
                             }
                         }

                     },
                 }}/>;
};

export default AverageRevenuePerUser;
