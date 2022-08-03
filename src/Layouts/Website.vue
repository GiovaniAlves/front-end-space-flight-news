<template>
   <div>
      <Navbar/>
      <div class="container-fluid mb-5">
         <router-view/>
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
</style>
