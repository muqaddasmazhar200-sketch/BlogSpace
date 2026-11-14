
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://blog-space-u3sc.vercel.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
