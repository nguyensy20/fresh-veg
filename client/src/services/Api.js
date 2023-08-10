import axios from 'axios';
// export default () => {
//     return axios.create({
//         baseURL: `http://localhost:5001/`
//     })
// }

// Add an Axios request interceptor
const instance = axios.create({baseURL: `http://localhost:5001/`})
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default instance;
