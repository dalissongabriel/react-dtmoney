import axios from 'axios';

const url = process.env.REACT_APP_MIRAGEJS_URL
    ?? process.env.REACT_APP_VERCEL_URL
    ?? 'localhost:3000';

export const api = axios.create({
    baseURL: `http://${url}/api`,
});