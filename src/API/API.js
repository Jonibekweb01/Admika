import axios from 'axios';
const baseURL = 'http://localhost:8080/';

export const api = {
    getProducts: () => axios.get(baseURL + "products"),
    postProducts: (params) => axios.post(baseURL + "products", params)
}