import axios, { AxiosResponse } from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const Instance = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }, 
    paramsSerializer: {
        serialize: (params) => {
            return queryString.stringify({...params, api_key: apiConfig.apiKey})
        }
    }
});

// middleware here 
Instance.interceptors.request.use(async (config) => config);

// Instance.interceptors.response.use(response => {
//     if (response && response.data) {
//         return response.data;
//     }

//     return response;
// }, (error) => {
//     throw error
// });

export default Instance;