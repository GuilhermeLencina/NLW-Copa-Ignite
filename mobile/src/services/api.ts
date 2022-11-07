import axios from "axios";

//import { API_URL } from "@env";

export const api = axios.create({
    baseURL: 'http://192.168.0.106:3333'
    //baseURL: API_URL,
});