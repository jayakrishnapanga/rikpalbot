import axios from 'axios'
export async function get_answer(updatedHistory) {
    try {
        console.log(updatedHistory)
        const requestBody = {
            'question': updatedHistory,
        };
        // console.log(requestBody)
        let responce = await axios.post(`http://localhost:4000/api/getAnyInformation`, requestBody)
        // console.log(responce)
        // console.log(requestBody)
        let data = responce.data;
        if (data?.Normal?.length >= 3 || data?.Graph?.length >= 3) {
            let newmess = {
                'role': 'assistant',
                'content': data?.Normal !== undefined ? data?.Normal[0]['Your query'] : data?.Graph[0]['Your query']
            }

        }
        if (data.Normal !== undefined) {
            data = data.Normal
            if (data.length === 1) {
                return { "Normal": data[data.length - 1] }
            }
            else if (data.length === 3) {
                return { "Normal": getOutput(data) }
            }
            return { "Normal": data.slice(0, data.length - 1) }
        }
        else {
            data = data.Graph
            return { "Graph": data }
        }

    } catch (error) {
        return { "Normal": "Not found any result" }
    }
}

function getOutput(data) {
    let output = "";
    output += data[0]['Your query'];
    output += '\n\n';
    output += data[2]['output'];
    return output;
}