<template>
  <div v-if="props.visible" :class="computedClasses">
    <div class="absolute top-0 left-1">
      {{ props.atomicNumber }}
    </div>
    {{ props.simbol }}
    <div class="absolute bottom-0 w-full flex justify-center">
      {{ $t(props.name) }}
    </div>
  </div>
  <div v-else :class="computedClasses"></div>
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

  const computedClasses = `col-span-${props.classe} overflow-hidden h-24 w-24 relative flex items-center justify-center ${props.visible ? 'border border-slate-950' : ''}`;
</script>

<style scoped>
.col-span-10 {
  grid-column: span 10 / span 10;
}
</style>
