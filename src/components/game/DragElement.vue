<template>
  <div :class="computedClasses" draggable="true">
    <div :class="computedClasses2" :id="props.atomicNumber">
      <div class="absolute top-0 left-1">
        ?
      </div>
      {{ props.simbol }}
      <div class="absolute bottom-0 w-full flex justify-center">
        {{ $t(props.name) }}
      </div>
    </div>
    </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    simbol: String,
    name: String,
    atomicNumber: String
  });

  const computedClasses = `toDrag col-span-1 overflow-hidden h-24 w-24 relative flex items-center justify-center border border-slate-950`;
  const computedClasses2 = `overflow-hidden h-24 w-24 relative flex items-center justify-center `;
</script>

<style scoped>
.col-span-10 {
  grid-column: span 10 / span 10;
}
</style>
