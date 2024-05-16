<script setup>
import Element from './../components/global/Element.vue'
import elements from './../data/elements.js'

</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="w-full h-screen flex justify-center items-center">
    <div class="grid grid-cols-18 border-separate gap-1">

      <Element v-for="element in elements" :visible="element.visible" :classe="element.classe" :simbol="element.simbol" :atomicNumber="element.atomicNumber" :name="element.name"></Element>

    </div>
  </div>

</template>

<style scoped>
/* grid cols */
.grid-cols-18 {
  grid-template-columns: repeat(18, minmax(0, 1fr));
}

/* cols span */
.col-span-16 {
  grid-column: span 16 / span 16;
}
</style>
