import axios from "axios";
import { BASE_URL } from "./BASE_URL";

export async function getAll(endpoint) {
    let result = { data: [], error: null };
    await axios.get(BASE_URL + endpoint).then((res) => {
        result = { ...result, data: res.data };
    }).catch((err) => {
        result = { ...result, error: err };
    })
    return result;
}

export async function delOne(endpoint, id) {
    let result = { data: [], error: null };
    await axios.delete(BASE_URL + endpoint + `/${id}`).then((res) => {
        result = { ...result, data: res.data };
    }).catch((err) => {
        result = { ...result, error: err }
    })
    return result;
}
export async function addOne(endpoint, obj) {
    let result = { data: [], error: null };
    await axios.post(BASE_URL + endpoint, obj).then((res) => {
        result = { ...result, data: res.data };
    }).catch((err) => {
        result = { ...result, error: err }
    })
    return result;
}