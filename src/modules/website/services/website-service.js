import axiosCliente from '../../../../axios'

const route = '/articles'

const index = async (perPage) => {
   const response = await axiosCliente.get(`${route}?per_page=${perPage}`)
   return response.data
}

export default {
   index
}
