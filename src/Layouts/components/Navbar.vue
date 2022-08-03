<template>
  <div>
    <nav class="navbar navbar-expand bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul></ul>
          <form class="d-flex" role="search">
            <div class="input-group input-group-sm">
              <input type="text" class="form-control form-itens" placeholder="Search">
              <span class="input-group-text"><i class="bi bi-search"></i></span>
            </div>
            <ul class="navbar-nav me-auto mb-2 px-3 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ordenar
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Mais Antigas</a></li>
                  <li><a class="dropdown-item" href="#">Mais Novas</a></li>
                </ul>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.form-itens {
  box-shadow:none;
  height: 35px;
}
span {
  height: 35px;
}
</style>
