import axiosCliente from '../../../../axios'

const route = '/articles'

const index = async () => {
   const response = await axiosCliente.get(`${route}`)
   return response.data
}

export default {
   index
}
