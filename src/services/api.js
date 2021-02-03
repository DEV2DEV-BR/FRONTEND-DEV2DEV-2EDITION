import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export default api