<template lang="pug">
  #app
    b-navbar.bg-cope(toggleable='md', type='dark')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='#card-form') INICIO
          b-nav-item(href='#') SERVICIOS
          b-nav-item(href='#') CONTACTANOS

    comp-carousel
    div
      h1
        strong Comentarios o Dudas
      p Sera un gusto atenderle.
    .margen-content.row
      .col-md-3
      .col-md-6
        #card-form.card
          .card-body
            
            comp-form-contacto
            
      .col-md-3
        
    .margen-content.row
           
      .col-md-4
        
        comp-card(imgUrl="https://picsum.photos/600/300/?image=25", titulo="Parqueo", descripcion="Disfruta de nuestro seguro y amplio parqueo, ubicadi a un costado de Pollo Pinulitos.")
      .col-md-4
       div
        h1
          strong Servicios
        p Disfruta de nuestros multiples servicios.     
        comp-card(imgUrl="https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/WhatsApp%20Image%202018-12-01%20at%2013.29.56.jpeg", titulo="Electrodomesticos" descripcion="Las mejores marcas de amueblados, televisores, refrigeradires y mucho mas al mejor precio.")
      .col-md-4
        comp-card(imgUrl="https://picsum.photos/600/300/?image=25", titulo="Surtitienda" descripcion="Credito en productos para iniciar su negocio o surtirlo con mayor comodidad.")
    .margen-content.row
      .col-md-4
        comp-card(imgUrl="https://picsum.photos/600/300/?image=25", titulo="Agente Mi Coope", descripcion="Realiza tus pagos, depositos, retiros de forma facil, rapida y confiable.")
      .col-md-4
        comp-card(imgUrl="https://picsum.photos/600/300/?image=25", titulo="Reparto a domicilio" descripcion="Llame al Tel: 5494 0620, con gusto tomaremos su pedido, aplican restricciones.")
      .col-md-4
        comp-card(imgUrl="https://picsum.photos/600/300/?image=25", titulo="Productos de consumo diario" descripcion="Diversos productos que engloban las marcas mas conocidas al mejor precio.")
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
