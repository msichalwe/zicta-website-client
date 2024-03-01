'use client'

import {Chart, ChartDataset, registerables} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(...registerables);
Chart.register(ChartDataLabels);


const data: ChartDataset<any> = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
        {
            label: 'Total Subscriptions',
            data: [17.2, 19.1, 20.2, 19.8, 19.9], // Adjusted data for millions scale
            backgroundColor: '#387ADF',
            borderColor: '#387ADF',
            borderWidth: 1,
            yAxisID: 'y-axis-1', // Associate with left y-axis
            type: 'bar',
            maxBarWidth: 2,
            pointRadius: 9, // Adjust the size of the points (pins)
            fill: true

        },
        {
            label: 'Mobile Penetration Per 100 Individuals', // Changed label and scale
            data: [99.1, 106.8, 110, 101.2, 101.6], // Ensure data types are consistent
            fill: false,
            borderColor: 'red',
            yAxisID: 'y-axis-2', // Associate with right y-axis
            type: 'line',
            pointRadius: 9, // Adjust the size of the points (pins)
            borderCapStyle: 'monotone', // Make the line rounded
            pointBackgroundColor: 'white', // Change the fill color of the points to white



        },
    ],
};

const options: {} = {

    scales: {
        x: {
            stacked: true,
            barThickness: 2, // Adjust the thickness of the bars
        },
        'y-axis-1': {
            position: 'left',

            title: {
                display: true,
                text: 'Total Subscription (Million)',
            },

            grid: {
                display: false
            }
        },
        'y-axis-2': {
            position: 'right',
            ticks: {
                stepSize: 20, // Set the step size to 20
                beginAtZero: true // Start the ticks at zero
            },
            title: {
                display: true,
                text: 'Penetration/100 Individuals\n',
            },

            // ... other options for the right y-axis
        },
    },

    plugins: {
        title: {
            display: true,
            text: "TOTAL MOBILE SUBSCRIPTION & MOBILE PENETRATION",
        },
        legend: {
            position: "bottom",
        },

    }
    // ... other chart options
};


export default function Overview() {
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
}
