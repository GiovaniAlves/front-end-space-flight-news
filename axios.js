import axios from 'axios'

const axiosCliente = axios.create({
   baseURL: 'http://localhost:8989/api'
})

export default axiosCliente
