<script setup lang="ts">
import BackgroundPattern from '@/components/BackgroundPattern.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CreditFooter from './components/CreditFooter.vue'
import SiteNotice from './components/SiteNotice.vue'
import config from '@/config'

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
  <SiteNotice v-if="config.customize.headerWarning.enabled" />

  <div class="relative h-screen overflow-hidden">
    <BackgroundPattern :pattern="currentPattern" />
    <div class="overflow-y-auto overflow-x-hidden h-full custom-scrollbar">
      <RouterView />
    </div>
  </div>
  <CreditFooter v-if="config.customize.showCredits" />
</template>
