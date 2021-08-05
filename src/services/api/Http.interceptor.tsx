import axios from 'axios';

const TIMEOUT_ERROR_MESSAGE = 'timeoutErrorMessage';

axios.defaults.timeout = 20000;
axios.defaults.timeoutErrorMessage = TIMEOUT_ERROR_MESSAGE;

let instance = axios.create({
    baseURL: process.env.REACT_APP_API_LINK,
});

instance.interceptors.request.use(
    async (config) => {

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export const http = instance;
