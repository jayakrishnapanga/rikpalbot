// import React, { useState } from "react";
// import Chart from "react-apexcharts";

// const ApexChart = () => {
//     // Define the initial state using useState hook
//     const [chartData, setChartData] = useState({
//         options: {
//             chart: {
//                 id: "basic-bar"
//             },
//             xaxis: {
//                 categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//             }
//         },
//         series: [
//             {
//                 name: "series-1",
//                 data: [30, 40, 45, 50, 49, 60, 70, 91]
//             }
//         ]
//     });

//     // Render the chart using the data defined in the state
//     return (
//         <div className="app">
//             <div className="row">
//                 <div className="mixed-chart">
//                     <Chart
//                         options={chartData.options}
//                         series={chartData.series}
//                         type="bar"
//                         width="500"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ApexChart;


// import React from 'react';
// import Chart from "react-apexcharts";

// const ApexChart = ({ chartData }) => {
//     console.log("Rendering ApexChart with:", chartData);

//     // Validate the necessary chart data properties
//     if (!chartData || !chartData.options || !chartData.series || chartData.series.some(s => !s.data)) {
//         console.error("Chart configuration is incomplete or incorrect.");
//         return <p>Chart configuration is incomplete or incorrect.</p>;
//     }

//     // Ensure x-axis categories match series data length
//     if (chartData.series.some(s => s.data.length !== chartData.options.xaxis.categories.length)) {
//         console.error('Mismatch between categories and series data lengths.');
//         return <p>Error: Data lengths do not match.</p>;
//     }

//     // Check for empty data arrays
//     if (chartData.series.some(s => s.data.length === 0)) {
//         console.error("Series data arrays are empty.");
//         return <p>Series data arrays are empty.</p>;
//     }
//     console.log(chartData.options.chart.type)
    
//     return (
//         <div className="app">
//             <div className="mixed-chart">
//                 <Chart
//                     options={chartData.options}
//                     series={chartData.series}
//                     type={chartData.options.chart.type}
//                     width="100%"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ApexChart;

// import React from 'react';
// import Chart from "react-apexcharts";

// const ApexChart = ({ chartData }) => {
//     console.log("Rendering ApexChart with:", chartData);

//     // Basic validations for chartData and its sub-properties
//     if (!chartData || !chartData.options || !chartData.series || chartData.series.some(s => !s.data)) {
//         console.error("Chart configuration is incomplete or incorrect.");
//         return <p>Chart configuration is incomplete or incorrect.</p>;
//     }

//     // Ensure that chartData.options.title is an object
//     if (!chartData.options.title) {
//         chartData.options.title = { text: "Default Title" };
//     } else if (typeof chartData.options.title.text !== 'string') {
//         console.error("Title text is undefined or not a string.");
//         chartData.options.title.text = "Default Title";
//     }

//     // Ensure that chartData.options.xaxis and chartData.options.xaxis.title are objects
//     if (!chartData.options.xaxis) {
//         chartData.options.xaxis = { title: { text: "Default X-Axis" } };
//     } else if (!chartData.options.xaxis.title) {
//         chartData.options.xaxis.title = { text: "Default X-Axis" };
//     } else if (typeof chartData.options.xaxis.title.text !== 'string') {
//         console.error("X-axis title text is undefined or not a string.");
//         chartData.options.xaxis.title.text = "Default X-Axis";
//     }

//     // Check for mismatch in data lengths
//     if (chartData.series.some(s => s.data.length !== chartData.options.xaxis.categories.length)) {
//         console.log(chartData.options.xaxis.categories)
//         console.error('Mismatch between categories and series data lengths.');
//         return <p>Error: Data lengths do not match.</p>;
//     }

//     return (
//         <div className="app">
//             <div className="mixed-chart">
//                 <Chart
//                     options={chartData.options}
//                     series={chartData.series}
//                     type={chartData.options.chart.type}
//                     width="100%"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ApexChart;


// import React from 'react';
// import Chart from "react-apexcharts";

// const ApexChart = ({ chartData }) => {
//     console.log("Rendering ApexChart with:", chartData);

//     // Function to generate a random color in hexadecimal format
//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };

//     // Basic validations for chartData and its sub-properties
//     if (!chartData || !chartData.options || !chartData.series || chartData.series.some(s => !s.data)) {
//         console.error("Chart configuration is incomplete or incorrect.");
//         return <p>Chart configuration is incomplete or incorrect.</p>;
//     }

//     // Ensure that chartData.options.title is an object
//     if (!chartData.options.title) {
//         chartData.options.title = { text: "Default Title" };
//     } else if (typeof chartData.options.title.text !== 'string') {
//         console.error("Title text is undefined or not a string.");
//         chartData.options.title.text = "Default Title";
//     }

//     // Ensure that chartData.options.xaxis and chartData.options.xaxis.title are objects
//     if (!chartData.options.xaxis) {
//         chartData.options.xaxis = { title: { text: "Default X-Axis" } };
//     } else if (!chartData.options.xaxis.title) {
//         chartData.options.xaxis.title = { text: "Default X-Axis" };
//     } else if (typeof chartData.options.xaxis.title.text !== 'string') {
//         console.error("X-axis title text is undefined or not a string.");
//         chartData.options.xaxis.title.text = "Default X-Axis";
//     }

//     // Check for mismatch in data lengths
//     if (chartData.series.some(s => s.data.length !== chartData.options.xaxis.categories.length)) {
//         console.log(chartData.options.xaxis.categories)
//         console.error('Mismatch between categories and series data lengths.');
//         return <p>Error: Data lengths do not match.</p>;
//     }

//     // Assign a random color to each series
//     chartData.series = chartData.series.map(series => ({
//         ...series,
//         color: getRandomColor(),  
//     }));

//     return (
//         <div className="app">
//             <div className="mixed-chart">
//                 <Chart
//                     options={chartData.options}
//                     series={chartData.series}
//                     type={chartData.options.chart.type}
//                     width="100%"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ApexChart;


import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

const ApexChart = ({ chartData }) => {
    console.log("Rendering ApexChart with:", chartData);

    // State to hold the initial colors
    const [seriesColors, setSeriesColors] = useState([]);

    // Function to generate a random color in hexadecimal format
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Effect to assign random colors once on component mount
    useEffect(() => {
        if (chartData && chartData.series) {
            const colors = chartData.series.map(() => getRandomColor());
            setSeriesColors(colors);
        }
    }, []); // Empty dependency array to run only on mount

    // Basic validations for chartData and its sub-properties
    if (!chartData || !chartData.options || !chartData.series || chartData.series.some(s => !s.data)) {
        console.error("Chart configuration is incomplete or incorrect.");
        return <p>Chart configuration is incomplete or incorrect.</p>;
    }

    // Ensure that chartData.options.title is an object
    if (!chartData.options.title) {
        chartData.options.title = { text: "Default Title" };
    } else if (typeof chartData.options.title.text !== 'string') {
        console.error("Title text is undefined or not a string.");
        chartData.options.title.text = "Default Title";
    }

    // Ensure that chartData.options.xaxis and chartData.options.xaxis.title are objects
    if (!chartData.options.xaxis) {
        chartData.options.xaxis = { title: { text: "Default X-Axis" } };
    } else if (!chartData.options.xaxis.title) {
        chartData.options.xaxis.title = { text: "Default X-Axis" };
    } else if (typeof chartData.options.xaxis.title.text !== 'string') {
        console.error("X-axis title text is undefined or not a string.");
        chartData.options.xaxis.title.text = "Default X-Axis";
    }

    // Check for mismatch in data lengths
    if (chartData.series.some(s => s.data.length !== chartData.options.xaxis.categories.length)) {
        console.log(chartData.options.xaxis.categories)
        console.error('Mismatch between categories and series data lengths.');
        return <p>Error: Data lengths do not match.</p>;
    }

    // Assign the initial random colors to each series
    const coloredSeries = chartData.series.map((series, index) => ({
        ...series,
        color: seriesColors[index] || getRandomColor(), // Use the stored color or generate new if not available
    }));

    return (
        <div className="app">
            <div className="mixed-chart">
                <Chart
                    options={chartData.options}
                    series={coloredSeries}
                    type={chartData.options.chart.type}
                    width="100%"
                />
            </div>
        </div>
    );
};

export default ApexChart;
