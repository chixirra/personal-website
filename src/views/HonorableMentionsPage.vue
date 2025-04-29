<script setup lang="ts">
import HandleNavigation from '@/utils/HandleNavigation'

import quoteList from '@/assets/quotes.ts'

import { ref, onMounted } from 'vue'
import config from '@/config'

const quote = ref({ text: '', author: '' })

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * quoteList.length)
  quote.value = quoteList[randomIndex]
})
</script>

<template>
  <p class="text-white">TODO:THIS PAGE</p>
</template>
