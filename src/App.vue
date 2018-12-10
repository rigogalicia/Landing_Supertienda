<template lang="pug">
  #app
    b-navbar.bg-cope(toggleable='md', type='dark')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='#') INICIO
          b-nav-item(href='#') SERVICIOS
          b-nav-item(href='#') CONTACTANOS
    comp-carousel
</template>

<script>
import CompCarousel from '@/components/carousel.vue'

export default {
  name: 'app',
  components: {
    CompCarousel
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
  @import './css/main.css'
</style>
