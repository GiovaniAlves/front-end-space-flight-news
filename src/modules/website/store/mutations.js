export default {
   SET_ARTICLES (state, articles) {
      state.articles.data = articles.data
      state.articles.links.data = articles.meta.links
      state.articles.links.firstPage = articles.links.first
      state.articles.links.lastPage = articles.links.last
      state.articles.links.currentPage = articles.meta.current_page
   },

   SET_ARTICLES_LOADING (state, status) {
      state.articles.loading = status
   }
}
