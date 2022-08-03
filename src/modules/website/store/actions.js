import websiteService from '@/modules/website/services/website-service'

export default {
   async getArticles ({ commit }, { perPage = null, filters = null } = {}) {
      commit('SET_ARTICLES_LOADING', true)

      let response = ''
      if (filters) {
         response = await websiteService.search(perPage, filters)
      } else {
         response = await websiteService.index(perPage)
      }

      commit('SET_ARTICLES', response)
      commit('SET_ARTICLES_LOADING', false)
      return response
   }
}
