<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <div class="absolute top-4 right-4">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="ca">Català</option>
    </select>
  </div>
  <RouterView ></RouterView>
</template>

<style scoped>
</style>
