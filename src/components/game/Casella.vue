<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  visible: Boolean,
  classe: String,
  atomicNumber: String
});

const computedClasses = `col-span-${props.classe} overflow-hidden h-24 w-24 relative flex items-center justify-center ${props.visible ? 'border border-slate-950' : ''}`;
</script>

<template>
  <div :class="computedClasses" name="target" :id="props.atomicNumber">
    
  </div>
</template>


<style scoped>
.col-span-10 {
  grid-column: span 10 / span 10;
}
</style>