<script setup lang="ts">
import HandleNavigation from '@/utils/HandleNavigation'
</script>
<template>
  <div
    id="#credits"
    :class="[
      'p-5 sm:p-10 md:p-15 lg:p-20 xl:p-25 2xl:p-25',
      'text-center text-[1rem] font-normal text-white primaryFont flex flex-col justify-center items-center h-fit',
    ]"
  >
    <span
      >this website is
      <button
        @click="HandleNavigation('/repository')"
        class="bg-clip-text bg-gradient-to-br from-accent to-accent-g text-transparent cursor-pointer hover:scale-120 transition-transform duration-300 focus:scale-120"
      >
        open source
      </button>
      <br />created with ❤️ by
      <button
        @click="HandleNavigation('/github')"
        class="bg-clip-text bg-gradient-to-br from-accent to-accent-g text-transparent cursor-pointer hover:scale-120 transition-transform duration-300 focus:scale-120"
      >
        chixirra
      </button>
    </span>
  </div>
</template>
