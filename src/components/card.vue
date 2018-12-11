<template lang="pug">
  div
    b-card.mb-2(:title='titulo', :img-src='imgUrl', img-alt='Image', img-top='', tag='article', style='max-width: 50rem;')
        p.card-text {{ descripcion }}
        
</template>
<script>
export default {
  props: {
    imgUrl: String,
    titulo: String,
    descripcion: String
  }
}
</script>
