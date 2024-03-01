
'use client'
import {Chart, ChartDataset, registerables} from 'chart.js';
Chart.register(...registerables);
Chart.register(ChartDataLabels);


import React from "react";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Sample data for the chart
const data:ChartDataset<any> = {
    labels: ["", "Annual", "Annual", "Annual", "Annual", "Annual", ""],
    datasets: [
        {
            label: "Total Domestic Outgoing (Billions)", // Changed label
            data: [,90, 82, 81, 86, 99,],
            fill: false,
            borderColor: "#50C4ED",
            yAxisID: 'y-axis-1', // Associate with left y-axis
            pointRadius: 9, // Adjust the size of the points (pins)
            pointBackgroundColor: 'white', // Change the fill color of the points to white
            borderCapStyle: 'round'
        },
        {
            label: "Total Domestic Outgoing (Millions)", // Changed label
            data: [,9.1, 10.2, 10.4, 11.1, 12.5,],
            fill: false,
            borderColor: "#387ADF", // Different color for distinction
            yAxisID: 'y-axis-2', // Associate with right y-axis
            pointRadius: 9, // Adjust the size of the points (pins)
            pointBackgroundColor: 'white', // Change the fill color of the points to white
            borderCapStyle: 'round'
        },
    ],
};

const options: {} = {
    scales: {
        // Define two y-axes
        'y-axis-1': {
            position: 'right',
            min: 70,
            max: 105,
            title: {
                display: true,
                text: 'Fixed Internet Subscription (\'000)\n',
            },
            grid: {
                display: false

            },
        },
        'y-axis-2': {
            min: 8.0,
            max: 13,
            position: 'left',
            title: {

                display: true,
                text: 'Mobile internet Users (million)',
            },
            // Adjust the ticks and gridlines for the right y-axis
            ticks: {
                beginAtZero: true, // Ensure starts from 0
                max: 15, // Adjust based on your data
            },
        },

    },
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            display: true,
            text: "INTERNET SUBSRCITPIONS - MOBILE & FIXED\n",
        },

    },
};

const InternetSubs = () => {
    return <Line data={data} options={options} />;
};

export default InternetSubs;
