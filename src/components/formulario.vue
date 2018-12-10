<template lang="pug">
  div
    b-form(@submit='onSubmit', @reset='onReset')
      b-form-group(label='Nombre:', label-for='nombre')
        b-form-input#nombre(type='text', required='true', placeholder='Ingresa tu nombre')
      b-form-group(label='Email:', label-for='email')
        b-form-input#email(type='email', placeholder='Ingresa tu correo electrónico')
      b-form-group(label='Teléfono:', label-for='telefono')
        b-form-input#telefono(type='text', placeholder='Ingresa número de Teléfono')
      b-form-group(label='Comentario:', label-for='comentario')
        b-form-textarea#comentario(placeholder='Ingresa un comentario', :rows='3', :max-rows='6')
      b-button(type='submit', variant='primary') Registrarse
</template>
