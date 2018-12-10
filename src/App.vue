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
    
    .margen-content.row
      .col-md-3
      .col-md-6
        #card-form.card
          .card-body
            comp-form-contacto
      .col-md-3
    
    .margen-content.row
      .col-md-4
        comp-card
      .col-md-4
        comp-card
      .col-md-4
        comp-card
    
</template>

<script>
import CompCarousel from '@/components/carousel.vue'
import CompFormContacto from '@/components/formulario.vue'
import CompCard from '@/components/card.vue'

export default {
  name: 'app',
  components: {
    CompCarousel, CompFormContacto, CompCard
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
