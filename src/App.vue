<script setup lang="ts">
import BackgroundPattern from '@/components/BackgroundPattern.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CreditFooter from './components/CreditFooter.vue'
import SiteNotice from './components/SiteNotice.vue'
import config from '@/config'

const route = useRoute()
const currentPattern = ref('squares')

document.body.setAttribute('data-theme', config.customize.theme)

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
    <div class="relative h-screen overflow-hidden">
      <div class="overflow-y-auto overflow-x-hidden h-full custom-scrollbar">
        <RouterView />
      </div>
    </div>
  </div>
  <CreditFooter v-if="config.customize.showCredits" />

  <!-- TODO: Add a dock where you can see my music playing and also change theme settings -->
</template>
