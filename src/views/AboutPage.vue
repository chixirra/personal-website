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
  <div id="#about-me" class="text-white flex flex-col lg:h-screen lg:flex-row gap-5 p-5">
    <div
      id="#navigation"
      class="primaryFont leading-tight font-medium gap-5 flex h-full lg:h-screen flex-col items-center justify-center"
    >
      <!-- NAVIGATION BAR + PAGE NAME -->
      <div
        :class="[
          'rounded-full backdrop-blur-[3px] backdrop-contrast-105 p-5',
          'outAnim animate__animated animate__backInLeft',
          'flex flex-row lg:flex-col justify-center items-center gap-5',
          'text-[1.8rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]',
          'w-full text-center uppercase overflow-y-hidden',
        ]"
      >
        <button
          @click="HandleNavigation('/')"
          :class="[
            'fas fa-arrow-left',
            'cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120',
            'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
          ]"
        />
        <span
          class="fa fa-user bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text"
        />
        <button
          @click="HandleNavigation('/projects')"
          :class="[
            'fas fa-list',
            'cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120 text-white',
          ]"
        />
        <button
          @click="HandleNavigation('/discord')"
          :class="[
            'fab fa-discord',
            'cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120 text-white',
          ]"
        />
        <button
          @click="HandleNavigation('/stars')"
          :class="[
            'fas fa-star',
            'cursor-pointer transition-transform duration-300 focus:scale-180 hover:scale-180',
            'bg-gradient-to-br from-star to-star-g text-transparent bg-clip-text',
            'animate__animated animate__heartBeat animate__delay-2s',
          ]"
        />
      </div>

      <div
        :class="[
          'rounded-full backdrop-blur-[3px] backdrop-contrast-105 ',
          'outAnim animate__animated animate__backInLeft',
          'flex flex-wrap justify-center items-center gap-2',
          'text-[1.8rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]',
          'w-full text-center uppercase',
        ]"
      >
        <span
          :class="[
            'flex flex-row lg:flex-col justify-center items-center gap-2',
            'primaryFont lowercase font-bold w-full p-5',
            'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
          ]"
        >
          <span
            class="text-[2.1rem] sm:text-[2.1rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[2.6rem] 2xl:text-[2.6rem]"
            >#</span
          >
          <div class="flex flex-row gap-x-2 lg:flex-col justify-center items-center text-white">
            <a>a</a><a>b</a><a>o</a><a>u</a><a>t</a>&nbsp;<a>m</a><a>e</a>
          </div>
        </span>
      </div>
    </div>

    <!-- THE ACTUAL PAGE CONTENT -->
    <div id="content" class="text-white flex gap-5 flex-col lg:flex-row">
      <div
        id="#leftside"
        class="flex flex-col justify-start w-full xl:w-fit items-center h-fit gap-5"
      >
        <div
          :class="[
            'secondaryFont',
            'outAnim animate__animated animate__backInDown',
            'rounded-2xl backdrop-blur-[3px] backdrop-contrast-105 p-5 h-fit',
            'w-full ',
            'flex flex-col text-justify items-start',
            'text-[2rem] w-full uppercase text-center',
          ]"
        >
          <div class="flex flex-row text-left gap-3 primaryFont lowercase font-bold">
            <span
              :class="[
                'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
                'text-[2.1rem] 2xl:text-[3.2rem] xl:text-[3.2rem] lg:text-[2.6rem] md:text-[2.2rem] sm:text-[2.1rem]',
              ]"
              >#</span
            >
            <div
              class="flex flex-row gap-x-2 xl:flex-col justify-center items-center content-center text-white"
            >
              biography
            </div>
          </div>
          <p
            class="text-[1rem] lowercase leading-normal w-fit"
            v-html="config.customize.aboutMePage.biography"
          ></p>
        </div>
        <div
          :class="[
            'secondaryFont',
            'outAnim animate__animated animate__backInDown',
            'rounded-2xl backdrop-blur-[3px] backdrop-contrast-105 p-5 h-fit',
            'w-full',
            'flex flex-col text-justify items-start',
            'text-[2rem] w-full uppercase text-center',
          ]"
        >
          <div class="flex flex-row text-left gap-3 primaryFont lowercase font-bold">
            <span
              :class="[
                'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
                'text-[2.1rem] 2xl:text-[3.2rem] xl:text-[3.2rem] lg:text-[2.6rem] md:text-[2.2rem] sm:text-[2.1rem]',
              ]"
              >#</span
            >
            <div
              class="flex flex-row gap-x-2 xl:flex-col justify-center items-center content-center text-white"
            >
              tech stack
            </div>
          </div>
          <p class="text-[1rem] lowercase leading-normal w-fit max-w-[45rem]">
            <!-- // TODO: techstack -->
            lalalalalalalalalalalalalalalala asdasd as das
            <br />asdasdaad;gojadgo;ahdghija<br />a sd asd as d asd asd a sd
          </p>
        </div>
      </div>
      <div
        id="#rightside"
        class="flex flex-col justify-start md:justify-end w-full xl:w-fit items-center h-full xl:h-full gap-5"
      >
        <div
          v-if="config.customize.aboutMePage.randomQuote.enabled"
          :class="[
            'secondaryFont',
            'outAnim animate__animated animate__backInUp',
            'rounded-2xl backdrop-blur-[3px] backdrop-contrast-105 p-5 h-fit',
            'w-full',
            'flex flex-col text-justify items-start',
            'text-[2rem] w-full uppercase text-center',
          ]"
        >
          <div
            class="flex flex-row text-left justify-center items-center gap-3 primaryFont lowercase font-bold"
          >
            <span
              :class="[
                'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
                'text-[3rem] xl:text-[4.1rem]',
              ]"
              >”</span
            >
            <p class="text-[1rem] lowercase italic font-light leading-normal">
              "{{ quote.text }}" <br />- {{ quote.author }}
            </p>
          </div>
        </div>
        <div
          :class="[
            'secondaryFont',
            'outAnim animate__animated animate__backInUp',
            'rounded-2xl backdrop-blur-[3px] backdrop-contrast-105 p-5 h-fit',
            'w-full',
            'flex flex-col text-justify items-start',
            'text-[2rem] w-full uppercase text-center',
          ]"
        >
          <div class="flex flex-row text-left gap-3 primaryFont lowercase font-bold">
            <span
              :class="[
                'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
                'text-[2.1rem] 2xl:text-[3.2rem] xl:text-[3.2rem] lg:text-[2.6rem] md:text-[2.2rem] sm:text-[2.1rem]',
              ]"
              >#</span
            >
            <div
              class="flex flex-row gap-x-2 xl:flex-col justify-center items-center content-center text-white"
            >
              short history
            </div>
          </div>
          <p
            v-html="config.customize.aboutMePage.shortHistory"
            class="text-[1rem] lowercase leading-normal w-full"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
