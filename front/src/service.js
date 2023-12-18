import axios from 'axios';

export const appService = {
    getParams,
    saveParams
};

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//127.0.0.1:5000/api/'


async function getParams() {
    try {
        const apiUrl = BASE_URL + 'get-params'
        const response = await axios.get(apiUrl);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching candle data:', error);
    }
}   
async function saveParams(data) {
    console.log(data)
    try {
        const apiUrl = BASE_URL + 'save-params'
        const response = await axios.post(apiUrl, { data: JSON.stringify(data) });
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching candle data:', error);
    }
}   