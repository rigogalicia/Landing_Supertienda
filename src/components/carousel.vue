<template lang="pug">
  div
    b-carousel#carousel1(style='text-shadow: 1px 1px 2px #333;', controls='', indicators='', background='#ababab', :interval='4000', img-width='1024', img-height='480', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Logo-fondo.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Canasta300.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Canasta200.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Canasta100.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Canasta75.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Canasta50.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Bazar.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/WhatsApp%20Image%202018-12-01%20at%2013.29.56.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/WhatsApp%20Image%202018-12-01%20at%2013.29.57%20(1).jpeg')
        
</template>