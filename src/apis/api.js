import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:8080/"
    // baseURL: 'https://618225f784c2020017d89cb0.mockapi.io/api'
})

export default api;