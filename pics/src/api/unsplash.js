import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1e1d81bf442f12ed735dea22c56332ae1a9d1955eb2d8120e3ac539228c6416b'
    }
});