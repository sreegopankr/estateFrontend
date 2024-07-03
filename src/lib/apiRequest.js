import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://estatebackendserver.onrender.com/api",
    withCredentials: true
})

export default apiRequest;