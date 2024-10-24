import axios from "axios";


const API_URL = 'http://localhost:8080/submit';


export const submitRequest = async (value,source)=>{
    const response = await axios.post(API_URL,{
        value: value,
        source,
    })
    return response;
}