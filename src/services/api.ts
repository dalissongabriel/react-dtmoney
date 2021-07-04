import axios from 'axios';

export const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_VERCEL_URL ?? 'localhost:3000'}/api`,
});