import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080/',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    }
});
