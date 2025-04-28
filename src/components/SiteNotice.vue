<script setup lang="ts">
import config from '@/config'
</script>

<template>
  <span
    v-html="config.customize.headerWarning.message"
    :class="[
      'primaryFont',
      'p-' + config.customize.headerWarning.size,
      'bg-accent  text-black text-center align-middle flex flex-col justify-center flex-nowrap items-center',
    ]"
  ></span>
</template>
