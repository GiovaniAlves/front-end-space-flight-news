import axiosCliente from '../../../../axios'

const route = '/articles'

const index = async (perPage) => {
   const response = await axiosCliente.get(`${route}?per_page=${perPage}`)
   return response.data
}

const search = async (perPage, filters) => {
   const response = await axiosCliente.post(`${route}/search?per_page=${perPage}`, filters)
   return response.data
}

export default {
   index,
   search
}
