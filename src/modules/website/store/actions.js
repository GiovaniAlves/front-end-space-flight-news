import websiteService from '@/modules/website/services/website-service'

export default {
   async getArticles ({ commit }, perPage) {
      commit('SET_ARTICLES_LOADING', true)

      const response = await websiteService.index(perPage)

      commit('SET_ARTICLES', response)
      commit('SET_ARTICLES_LOADING', false)
      return response
   }
}
