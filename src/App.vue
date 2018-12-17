<template lang="pug">
  #app
    b-navbar.bg-cope(toggleable='md', type='dark')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='#form-registro') INICIO
          b-nav-item(href='#services') SERVICIOS
          b-nav-item(href='#contact') CONTACTANOS

    comp-carousel
    div#form-registro
      h2
        strong Comentarios o Dudas
      p.parrafo-titulo Sera un gusto atenderle.
    .margen-content.row
      .col-md-3
      .col-md-6
        #card-form.card
          .card-body
            comp-form-contacto   
      .col-md-3
    
    .margen-content.row
      .col-md-4 
      #services.col-md-4 
        h2
          strong Servicios
        p.parrafo-titulo Disfruta de nuestra gran variedad de servicios.
      .col-md-4 

    .margen-content.row
      .col-md-4
        comp-card(imgUrl="src/assets/autocar.jpg", titulo="Parqueo", descripcion="Disfruta de nuestro seguro y amplio parqueo, ubicadi a un costado de Pollo Pinulitos.")
      .col-md-4    
        comp-card(imgUrl="src/assets/electrocar.jpg", titulo="Electrodomesticos" descripcion="Las mejores marcas de amueblados, televisores, refrigeradires y mucho mas al mejor precio.")
      .col-md-4
        comp-card(imgUrl="src/assets/carsurtitienda.jpg", titulo="Surtitienda" descripcion="Credito en productos para iniciar su negocio o surtirlo con mayor comodidad.")
    .margen-content.row
      .col-md-4
        comp-card(imgUrl="src/assets/agentecar.png", titulo="Agente Mi Coope", descripcion="Realiza tus pagos, depositos, retiros de forma facil, rapida y confiable.")
      .col-md-4
        comp-card(imgUrl="src/assets/repartocar.jpg", titulo="Reparto a domicilio" descripcion="Llame al Tel: 5494 0620, con gusto tomaremos su pedido, aplican restricciones.")
      .col-md-4
        comp-card(imgUrl="src/assets/carproducto.jpg", titulo="Productos de consumo diario" descripcion="Diversos productos que engloban las marcas mas conocidas al mejor precio.")

    .margen-content.row        
      #contact.col-md-12
        h2
          strong Contactanos 
        p.parrafo-titulo Buscanos para mayor informacion o inquietudes.
    .margen-content.row
    .margen-content.row
      .col-md-12
        // Footer
        footer.bg-cope.page-footer
          // Footer Elements
          .container
            // Social buttons
            ul.list-unstyled.list-inline.text-center
              li.list-inline-item
                a.btn-floating.btn-fb.mx-1
                  i.fa.fa-facebook  
              li.list-inline-item
                a.btn-floating.btn-tw.mx-1
                  i.fa.fa-twitter  
              li.list-inline-item
                a.btn-floating.btn-gplus.mx-1
                  i.fa.fa-google-plus  
              li.list-inline-item
                a.btn-floating.btn-li.mx-1
                  i.fa.fa-linkedin  
              li.list-inline-item
                a.btn-floating.btn-dribbble.mx-1
                  i.fa.fa-dribbble  
            // Social buttons
            // Footer Elements
            // Copyright
            .footer-copyright.text-center.py-3
              | © 2018 Copyright:
              a(href='https://mdbootstrap.com/education/bootstrap/')  MDBootstrap.com
            // Copyright
        // Footer
    
      
    
                       
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
  @import './css/main.css';
</style>
