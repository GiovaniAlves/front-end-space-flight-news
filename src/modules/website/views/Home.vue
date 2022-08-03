<template>
   <div>
      <nav class="navbar navbar-expand bg-light">
         <div class="container-fluid">
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
               <ul></ul>
               <form class="d-flex" role="search">
                  <div class="input-group input-group-sm">
                     <input v-model="filters.search" type="text" class="form-control form-itens" placeholder="Search">
                     <span @click="search()" class="input-group-text"><i class="bi bi-search"></i></span>
                  </div>
                  <ul class="navbar-nav me-auto mb-2 px-3 mb-lg-0">
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                           Ordenar
                        </a>
                        <ul class="dropdown-menu">
                           <!--  Criar um método-->
                           <li><a class="dropdown-item" @click.prevent="order('DESC')">Mais Antigas</a></li>
                           <li><a class="dropdown-item" @click.prevent="order('ASC')">Mais Novas</a></li>
                        </ul>
                     </li>
                  </ul>
               </form>
            </div>
         </div>
      </nav>

      <div class="d-flex flex-column align-items-center mb-5">

         <div id="circulo"></div>

         <p class="h4">
            Space Flight News
         </p>

         <hr class="width-full">

         <div v-if="loadingArticles" class="mb-2 fw-bold">Carregando...</div>

         <div v-else v-for="(article, index) in articles.data" :key="article.id" class="card mb-5 border-0"
              style="max-width: 540px;">
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
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
   name: 'Home',
   data () {
      return {
         filters: {
            search: '',
            orderBy: { id: 'DESC' }
         },
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
      await this.getArticles({ perPage: this.perPage })
   },
   methods: {
      ...mapActions(['getArticles']),

      async loadMore () {
         this.perPage = this.perPage + 5
         // Se entrar aqui tem algum filtro
         if (this.filters.search !== '' || this.filters.orderBy.id === 'ASC') {
            await this.getArticles({ perPage: this.perPage, filters: this.filters })
         } else {
            await this.getArticles({ perPage: this.perPage })
         }
      },

      async search () {
         await this.getArticles({ perPage: this.perPage, filters: this.filters })
         console.log(this.filters)
      },

      // eslint-disable-next-line camelcase
      order (asc_or_desc) {
         this.filters.orderBy = { id: asc_or_desc }
         this.getArticles({ perPage: this.perPage, filters: this.filters })
         console.log(this.filters)
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
