// import axios from 'axios'
// export async function get_answer(updatedHistory) {
//     try {
//         console.log(updatedHistory)
//         const requestBody = {
//             'question': updatedHistory,
//         };
//         // console.log(requestBody)
//         let responce = await axios.post(`/api/getsearch`, requestBody)
//         // console.log(responce)
//         // console.log(requestBody)
//         let data = responce.data;
//         if (data?.data?.length >= 3 || data?.Graph?.length >= 3) {
//             let newmess = {
//                 'role': 'assistant',
//                 'content': data?.data !== undefined ? data?.data[0]['Your query'] : data?.Graph[0]['Your query']
//             }

//         }
//         if (data.data !== undefined) {
//             data = data.data
//             if (data.length === 1) {
//                 return { "Normal": data[data.length - 1] }
//             }
//             else if (data.length === 3) {
//                 return { "Normal": getOutput(data) }
//             }
//             return { "Normal": data.slice(0, data.length - 1) }
//         }
//         else {
//             data = data.Graph
//             return { "Graph": data }
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
    const requestBody = {
        'question': updatedHistory,
    };
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        let response = await axios.post(`https://rikpalbotbackend.vercel.app/api/getsearch`, requestBody, config);
        let data = response.data;

        if (data.data || data.Graph) {
            if (data.data) {
                if (data.data.length === 1) {
                    return { "Normal": data.data[0] };
                } else if (data.data.length >= 3) {
                    return { "Normal": getOutput(data.data) };
                }
                return { "Normal": data.data.slice(0, data.data.length - 1) };
            } else {
                return { "Graph": data.Graph };
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return { "Normal": "Not found any result" };
    }
}

function getOutput(data) {
    let output = data[0]['Your query'];
    output += '\n\n';
    output += data[2]['output'];
    return output;
}

