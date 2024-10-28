import axios from "axios";
import { getValidToken } from "./tokenClient";

const URL = import.meta.env.VITE_NODE_ENV === 'development' ? import.meta.env.VITE_LOCAL_BASE_URL : import.meta.env.VITE_LIVE_BASE_URL
export const host = `${URL}/api`;
const encoded = btoa(`${import.meta.env.VITE_BASIC_USERNAME}:${import.meta.env.VITE_BASIC_PASSWORD}`);
// Create an axios instance
// console.log('Host', host)
export const useAxios = axios.create({
    baseURL: host,
    headers: {
        "Accept": "application/json",
        "Authorization": `Basic ${encoded}`
    },
});
export const useAxiosFormData = axios.create({
    baseURL: host,
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    },
});

export async function setToken(token) {
    let validToken = await token || await getValidToken();
    if (validToken) {
        useAxios.defaults.headers.common["token"] = `Bearer ${await validToken}`;
        useAxios.defaults.headers.common["Authorization"] = `Basic ${encoded}`
    } else {
        delete useAxios.defaults.headers.common["Authorization"];
        delete useAxios.defaults.headers.common["token"];
    }
}

// Validates token, and removes it if it's invalid
setToken(getValidToken());
// setToken();
