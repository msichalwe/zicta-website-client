'use client'
import {Chart, registerables} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(...registerables);
Chart.register(ChartDataLabels);


import React from "react";
import {Line} from "react-chartjs-2";

// Sample data for the chart
const data = {
    labels: ["", "2019", "2020", "2021", "2022", "2023", ""],
    datasets: [
        {
            label: "Total Domestic Outgoing ",
            data: [ , 17.2, 21.4, 21.4, 28.4, 31.9,],
            fill: false,
            borderColor: "#35374B",
            pointRadius: 9, // Adjust the size of the points (pins)
            pointBackgroundColor: 'white', // Change the fill color of the points to white




        }
    ],

};


const MyLineChart = () => {
    return <Line data={data}

                 options={{
                     scales: {
                         y: {
                             position: 'right',
                             min: 0,
                             max: 35,
                             title: {
                                 display: true,
                                 text: 'Domestic Outgoing Traffic (Billion)'
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
                             text: "Mobile Domestic Outgoing Traffic",
                         },
                         datalabels: {
                             color: 'black', // Set the color of the labels
                             anchor: 'end', // Position of the label relative to the point
                             align: 'top', // Position of the label relative to the point
                             formatter: (value, context) => {
                                 // Format the label as desired
                                 return value;
                             }
                         }

                     },
                 }}/>;
};

export default MyLineChart;
