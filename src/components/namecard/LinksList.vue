<script setup lang="ts">
import HandleNavigation from '@/utils/HandleNavigation'
import { computed } from 'vue'

import config from '@/config'
const linksRaw = config.links as Record<
  string,
  { address: string; text: string; icon: string; hidden?: boolean }
>

const links = computed(() =>
  Object.entries(linksRaw)
    .filter(([, link]) => !link.hidden)
    .map(([key, link]) => ({ key, ...link })),
)
</script>

<template>
  <div
    :class="[
      'p-5 gap-5 2xl:p-15 2xl:gap-10 xl:p-20 xl:gap-10 lg:p-15 lg:gap-5 md:p-10 md:gap-3 sm:p-5 sm:gap-2',

      'text-white secondaryFont flex flex-row justify-center items-center flex-wrap',
    ]"
  >
    <div
      :class="[
        '2xl:p-6 xl:p-6 lg:p6 md:p-5 sm:p-3 p-3',
        'pl-5 pr-5',
        'outAnim backdrop-blur-[3px] backdrop-contrast-80 rounded-full animate__animated animate__backInLeft',
      ]"
    >
      <div class="flex flex-wrap justify-center gap-5">
        <button
          v-for="(link, key) in links"
          :key="'#' + key"
          :class="[
            'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
            'flex flex-col text-4xl justify-center items-center cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120',
            'text-[1.5rem] 2xl:text-[2rem] xl:text-[1.75rem] lg:text-[2rem] md:text-[1.75rem] sm:text-[1.5rem]',

            link.icon,
          ]"
          @click="HandleNavigation('/' + key)"
        ></button>
      </div>
    </div>
    <div
      :class="[
        'pl-5 pr-5 2xl:p-6 xl:p-6 lg:p-6 md:p-5 sm:p-3 p-3 2xl:pl-15 2xl:pr-15 xl:pl-20 xl:pr-20 lg:pl-15 lg:pr-15 md:pl-10 md:pr-10 sm:pl-5 sm:pr-5',
        'text-[1rem] 2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1rem]',
        'outAnim font-light flex justify-items-center items-center flex-row',

        'backdrop-blur-[3px] backdrop-contrast-80 rounded-full animate__animated animate__backInRight',
      ]"
    >
      <div class="flex flex-wrap justify-center items-center gap-5">
        <button
          @click="HandleNavigation('/about')"
          class="flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120"
        >
          about me
        </button>
        <button
          @click="HandleNavigation('/projects')"
          class="flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120"
        >
          projects
        </button>
        <button
          @click="HandleNavigation('/contact')"
          class="flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120"
        >
          get in touch
        </button>
        <button
          @click="HandleNavigation('/stars')"
          class="bg-gradient-to-br from-star 'text-[1.25rem] 2xl:text-[2rem] xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.5rem] sm:text-[1.25rem]', to-star-g text-transparent bg-clip-text fas fa-star flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 focus:scale-160 hover:scale-160"
        ></button>
      </div>
    </div>
  </div>
</template>
