<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import config from '@/config'

const route = useRoute()
const router = useRouter()

const path = route.params.pathMatch as string
const links = config.links as Record<string, { address: string; text: string; icon: string }>
links.redirect = {
  address: '-',
  text: '-',
  icon: '-',
} //ignore
const link = links[path]?.address
const customLink = route.query.to as string | undefined
if (customLink) {
  setTimeout(() => {
    window.location.href = customLink
  }, config.customize.redirect.delay)
}
if (link && !customLink) {
  setTimeout(() => {
    router.push({ path: route.path })
    window.location.href = link
  }, config.customize.redirect.delay)
} else {
  if (!customLink) router.push({ name: 'home' })
}
</script>

<template>
  <div class="secondaryFont font-normal h-screen flex justify-center items-center text-center">
    <h1 class="animate__animated animate__tada text-4xl text-white">redirecting...</h1>
  </div>
</template>
