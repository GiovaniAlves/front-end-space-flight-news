<template>
   <div class="d-flex flex-column align-items-center mt-5">
      <div id="circulo"></div>

      <p class="h4">
         Space Flight News
      </p>

      <hr class="width-full">

      <div v-if="loadingArticles" class="mb-2 fw-bold">Carregando...</div>

      <div v-else v-for="(article, index) in articles.data" :key="article.id" class="card mb-5 border-0" style="max-width: 540px;">
         <div v-if="index % 2 === 0">
            <div class="row g-0">
               <div class="col-md-4 px-1">
                  <img :src="article.imageUrl" class="img-fluid rounded-start" :alt="article.title">
               </div>
               <div class="col-md-8">
                  <div class="card-body">
                     <h5 class="card-title fw-bold">{{ article.title }}</h5>
                     <div class="d-flex justify-content-between">
                        <p class="card-text"><small class="text-muted">{{ article.publishedAt }}</small></p>
                        <button type="button" class="btn btn-secondary btn-sm">{{ article.newsSite }}</button>
                     </div>
                     <p class="card-text">{{ article.summary }}</p>
                     <button class="btn btn-secondary">Ver Mais</button>
                  </div>
               </div>
            </div>
         </div>
         <div v-else>
            <div class="row g-0">
               <div class="col-md-8">
                  <div class="card-body">
                     <h5 class="card-title fw-bold">{{ article.title }}</h5>
                     <div class="d-flex justify-content-between">
                        <p class="card-text"><small class="text-muted">{{ article.publishedAt }}</small></p>
                        <button type="button" class="btn btn-secondary btn-sm">{{ article.newsSite }}</button>
                     </div>
                     <p class="card-text">{{ article.summary }}</p>
                     <button class="btn btn-secondary">Ver Mais</button>
                  </div>
               </div>
               <div class="col-md-4 px-1">
                  <img :src="article.imageUrl" class="img-fluid rounded-start" :alt="article.title">
               </div>
            </div>
         </div>
      </div>

      <i class="bi bi-square small"></i>
      <i class="bi bi-square small"></i>
      <i class="bi bi-square small"></i>

      <button @click="loadMore" type="button" class="btn btn-outline-purple btn-md mt-3">Carregar Mais</button>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
   name: 'Home',
   data () {
      return {
         perPage: 5
      }
   },
   computed: {
      ...mapState({
         articles: state => state.website.articles,
         loadingArticles: state => state.website.articles.loading
      })
   },
   async created () {
      await this.getArticles(this.perPage)
   },
   methods: {
      ...mapActions(['getArticles']),

      async loadMore () {
         this.perPage = this.perPage + 5
         await this.getArticles(this.perPage)
      }
   }
}
</script>

<style scoped>
#circulo {
   background-color: #fff;
   width: 160px;
   height: 160px;
   float: left;
   margin: 10px;
   background: radial-gradient(circle closest-side,
   rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 78%, #fff 80%, #fff 94%,
   #cdcfd5 96%, #8c92a4 99%, #fff 100%),
   url('https://static.vecteezy.com/system/resources/thumbnails/001/504/957/small/rocket-icon-free-vector.jpg') no-repeat center/115px 115px;
}

.width-full {
   width: 100%;
}

.small {
   font-size: 11px;
}

.btn-outline-purple {
   border: 1px solid #302e53;
   color: #302e53;
}
</style>
