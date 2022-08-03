<template>
   <div>
      <Navbar/>
      <div class="container-fluid mb-5">
         <div class="d-flex flex-column align-items-center mt-5">
            <div id="circulo"></div>
            <p class="h4">
               Space Flight News
            </p>
            <hr class="width-full">
            <div class="card mb-3 border-0" style="max-width: 540px;">
               <div class="row g-0">
                  <div class="col-md-4 px-1">
                     <img src="./../assets/logo.png" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                     <div class="card-body">
                        <h5 class="card-title fw-bold">Decolagem James Web</h5>
                        <div class="d-flex justify-content-between">
                           <p class="card-text"><small class="text-muted">dd/mm/yyyy</small></p>
                           <button type="button" class="btn btn-secondary btn-sm">NewsSite</button>
                        </div>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer. This is a wider card with supporting
                           text below as a natural lead-in.
                        </p>
                        <button class="btn btn-secondary">Ver Mais</button>
                     </div>
                  </div>
               </div>
            </div>
            <div class="card my-3 border-0" style="max-width: 540px;">
               <div class="row g-0">
                  <div class="col-md-8">
                     <div class="card-body">
                        <h5 class="card-title fw-bold">Decolagem James Web</h5>
                        <div class="d-flex justify-content-between">
                           <p class="card-text"><small class="text-muted">dd/mm/yyyy</small></p>
                           <button type="button" class="btn btn-secondary btn-sm">NewsSite</button>
                        </div>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer. This is a wider card with supporting
                           text below as a natural lead-in.
                        </p>
                        <button class="btn btn-secondary">Ver Mais</button>
                     </div>
                  </div>
                  <div class="col-md-4 px-1">
                     <img src="./../assets/logo.png" class="img-fluid rounded-start" alt="...">
                  </div>
               </div>
            </div>
            <i class="bi bi-square small"></i>
            <i class="bi bi-square small"></i>
            <i class="bi bi-square small"></i>
            <button type="button" class="btn btn-outline-purple btn-md mt-3">Carregar Mais</button>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '@/Layouts/components/Navbar'

export default {
  name: 'Website',
  components: { Navbar }
}
</script>

<style scoped>
@import url('./../assets/css/websiteStyle.css');

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
