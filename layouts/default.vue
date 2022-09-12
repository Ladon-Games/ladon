<template>
  <div class="_o-wrapper">
    <HeaderComp />
    <Nuxt />
  </div>
</template>

<script setup lang="ts">
import HeaderComp from '~/components/headerComp.vue';
</script>

<style>
body,
html {
  background-color: #D9D9D9;
  font-family: 'Sans Serif', 'Roboto';
}

._green {
  color: #3AB926 !important
}

._pink {
  color: #FF36A3 !important
}
</style>