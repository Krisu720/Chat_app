import axios from "axios";

const BASE_URL: string = 'http://localhost:3001/api/'

export const publicRequest = axios.create({
    baseURL: BASE_URL
})