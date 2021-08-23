import axios from "axios"

const api = axios.create({
    baseURL:'https://dev.thebraghouse.com/api/v1'
})


export default api;