<template>
  <div :class="computedClasses">
    <div class="absolute top-0 left-1">
      {{ props.atomicNumber }}
    </div>
    {{ props.simbol }}
    <div class="absolute bottom-0 w-full flex justify-center">
      {{ props.name }}
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    visible: Boolean,
    classe: String,
    simbol: String,
    atomicNumber: String,
    name: String
  });

  const computedClasses = `col-span-${props.classe} h-20 w-20 relative flex items-center justify-center ${props.visible ? 'border border-slate-950' : ''}`;
</script>

<style scoped>
</style>
