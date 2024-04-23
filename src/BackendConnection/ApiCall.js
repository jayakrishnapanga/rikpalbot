// import axios from 'axios'
// export async function get_answer(updatedHistory) {
//     try {
//         console.log(updatedHistory)
//         const requestBody = {
//             'question': updatedHistory,
//         };
//         // console.log(requestBody)
//         let response = await axios.post(`http://localhost:4000/api/getsearch`, requestBody)
//         // console.log(responce)
//         // console.log(requestBody)
//         let data = response.data;
//         let graph=response.data.Graph
//         console.log(graph)
//         console.log(data.Graph)
//         console.log(data.length)
//         console.log(data.data.length)
       
//         if (data.data !== undefined ) {

//             if(data.Graph)
//             {
//                 console.log("i am executed")
//                 return { "Normal": data }
//             }else{

//                 data = data.data
//             if (data.length === 1) {
//                 return { "Normal": data[data.length - 1] }
//             }
//             else if (data.length === 3) {
//                 return { "Normal": getOutput(data) }
//             }
//             return { "Normal": data.slice(0, data.length - 1) }

//             }  
//         }

//     } catch (error) {
//         return { "Normal": "Not found any result" }
//     }
// }

// function getOutput(data) {
//     let output = "";
//     output += data[0]['Your query'];
//     output += '\n\n';
//     output += data[2]['output'];
//     return output;
// }


import axios from 'axios';

export async function get_answer(updatedHistory) {
    try {
        const requestBody = { 'question': updatedHistory };
        let response = await axios.post(`http://43.205.114.54:4000/api/getsearch`, requestBody);
        let data = response.data;
        
        let result = {};
        if (data.Graph) {
            result.Graph = transformGraphData(data.Graph);
        }
        if (data.data) {
            result.Normal = data.data.length === 1 ? data.data[0] : getOutput(data.data);
        }
        return result;

    } catch (error) {
        console.error("Error fetching data:", error);
        return { "Normal": "Failed to fetch results" };
    }
}

function transformGraphData(graph) {
    const { chart, series, xaxis, yaxis } = graph;
    return {
        options: {
            chart: {
                id: chart.type,
                type: chart.type,
                height: chart.height
            },
            xaxis: {
                categories: xaxis.categories.filter(category => category != null),
                title: {
                    text: xaxis.title.text
                }
            },
            yaxis: {
                title: {
                    text: yaxis.title.text
                }
            }
        },
        series: series.map(s => ({
            name: s.name,
            data: s.data.filter(d => d != null)
        }))
    };
}

function getOutput(data) {
    // Include the query in the output structure
    let output = {
        query: data[0]['Your query'],  // Save the query statement
        results: []
    };
    data.slice(1).forEach((item, index) => {
        output.results.push(item);  // Collect the result entries
    });
    return output;
}
