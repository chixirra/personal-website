<script setup lang="ts">
import HandleNavigation from '@/utils/HandleNavigation'
</script>

<template>
  <div class="text-white flex flex-col w-screen h-screen lg:flex-col gap-5 p-5">
    <!-- NAVIGATION -->
    <div
      id="#navigation"
      class="primaryFont leading-tight font-medium gap-5 flex-col h-fit lg:flex-row flex items-center justify-center"
    >
      <!-- NAVIGATION BAR + PAGE NAME -->
      <div
        :class="[
          'rounded-full backdrop-blur-[3px] backdrop-contrast-105',
          'outAnim animate__animated animate__backInDown',
          'flex flex-row justify-center items-center gap-5 p-5',
          'text-[1.8rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]',
          'lg:w-fit w-full h-full justify-center text-center uppercase overflow-y-hidden',
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
        <button
          @click="HandleNavigation('/about')"
          :class="[
            'fas fa-user',
            'cursor-pointer transition-transform duration-300 focus:scale-120 hover:scale-120 text-white',
          ]"
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
        <span
          class="fa fa-star bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text"
        />
      </div>

      <div
        :class="[
          'rounded-full backdrop-blur-[3px] backdrop-contrast-105 ',
          'outAnim animate__animated animate__backInDown',
          'flex flex-row justify-center items-center gap-2 p-5',
          'text-[1.8rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]',
          'lg:w-fit w-full h-full text-center uppercase',
        ]"
      >
        <span
          :class="[
            'flex flex-row justify-center items-center gap-2',
            'primaryFont lowercase font-bold',
            'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
          ]"
        >
          <span
            class="text-[2.1rem] sm:text-[2.1rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[2.6rem] 2xl:text-[2.6rem]"
            >#</span
          >
          <div class="flex flex-row gap-x-2 justify-center items-center text-white">
            <div class="flex flex-wrap">
              <div>
                <a>h</a><a>o</a><a>n</a><a>o</a><a>u</a><a>r</a><a>a</a><a>b</a><a>l</a
                ><a>e</a>&nbsp;
              </div>
              <div><a>m</a><a>e</a><a>n</a><a>t</a><a>i</a><a>o</a><a>n</a><a>s</a></div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
