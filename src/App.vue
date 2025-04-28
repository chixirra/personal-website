<script setup lang="ts">
import BackgroundPattern from '@/components/BackgroundPattern.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CreditFooter from './components/CreditFooter.vue'

const route = useRoute()
const currentPattern = ref('squares')

// watch the route and update the pattern with a delay for fade-out
watch(
  () => route.name,
  (newRoute) => {
    const patternMap: Record<string, string> = {
      default: 'squares',
      about: 'dots',
    }
    setTimeout(() => {
      currentPattern.value =
        typeof newRoute === 'string' ? patternMap[newRoute] || 'squares' : 'squares'
    }, 500)
  },
)
</script>

<template>
  <!-- <span
    class="primaryFont text-white text-center align-middle flex flex-col justify-center flex-nowrap items-center"
    >this site isn't ready so right now it's just a preview lacking in most functionality</span
  > -->

  <div class="relative h-screen overflow-hidden">
    <BackgroundPattern :pattern="currentPattern" />
    <div class="overflow-y-auto overflow-x-hidden h-full custom-scrollbar ">
      <RouterView  />
    </div>
  </div>
  <CreditFooter />
</template>
