<template lang="pug">
  div
    b-carousel#carousel1(style='text-shadow: 1px 1px 2px #333;', controls='', indicators='', background='#ababab', :interval='4000', img-width='1024', img-height='480', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Logo-fondo.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Bazar.jpeg')
        b-carousel-slide(img-src='https://raw.githubusercontent.com/rigogalicia/Landing_Supertienda/master/src/assets/Canastas.jpeg')
</template>