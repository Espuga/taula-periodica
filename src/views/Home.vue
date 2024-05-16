<script setup>
/* import { useI18n } from 'vue-i18n';
const { t } = useI18n(); */
</script>

<template>
  <div class="flex flex-row items-center bg-blue-400 h-16">
    <a href="/periodicTable" class="m-4 underline cursor-pointer">{{ $t('periodicTable') }}</a>
    <a href="/game" class="m-4 underline cursor-pointer">{{ $t('game') }}</a>
  </div>
</template>