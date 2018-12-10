<template lang="pug">
  #app
    b-navbar.bg-cope(toggleable='md', type='dark')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='#') INICIO
          b-nav-item(href='#') SERVICIOS
          b-nav-item(href='#') CONTACTANOS
    div
      b-carousel#carousel1(style='text-shadow: 1px 1px 2px #333;', controls='', indicators='', background='#ababab', :interval='4000', img-width='1024', img-height='480', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Logo-fondo.jpeg')
        b-carousel-slide(caption='First slide', text='Nulla vitae elit libero, a pharetra augue mollis interdum.', img-src='https://picsum.photos/1024/480/?image=52')
        b-carousel-slide(caption='First slide', text='Nulla vitae elit libero, a pharetra augue mollis interdum.', img-src='https://picsum.photos/1024/480/?image=52')
    img(src="@/assets/prueba.png")
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
