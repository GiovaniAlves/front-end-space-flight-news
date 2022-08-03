export default {
   SET_ARTICLES (state, articles) {
      state.articles.data = articles.data
      state.articles.links.data = articles.links
      state.articles.links.firstPage = articles.first_page_url
      state.articles.links.lastPage = articles.last_page_url
      state.articles.links.currentPage = articles.current_page
   },

   SET_ARTICLES_LOADING (state, status) {
      state.articles.loading = status
   }
}
