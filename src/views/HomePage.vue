<script setup lang="ts">
import LinksList from '@/components/namecard/LinksList.vue'
import config from '@/config'
</script>

<template>
  <div
    id="#name-card"
    class="text-white text-center flex flex-col justify-center flex-nowrap items-center h-screen"
  >
    <div class="outAnim font-black text-white animate__animated animate__backInDown">
      <div class="flex flex-col justify-center items-center">
        <img
          v-if="config.customize.showProfilePicture"
          id="#profile-picture"
          src="@/assets/images/profile.png"
          alt="profile picture"
          :class="[
            'hidden md:flex',
            'md:absolute top-0 left-0 bottom-0 right-0 m-auto',
            'animate__animated animate__bounceIn animate__delay-1s',
            'rounded-full mt-5 mb-5',
            'md:h-[10rem] md:w-[10rem] lg:h-[10rem] lg:w-[10rem] 2xl:h-[15rem] 2xl:w-[15rem] xl:h-[12.5rem] xl:w-[12.5rem]',
          ]"
        />
        <span
          id="#name-text"
          :class="[
            '2xl:text-[12rem] xl:text-[10rem] lg:text-[8rem] md:text-[8rem] sm:text-[7rem] text-[4.5rem]',
            'primaryFont font-black tracking-wider leading-[0.75] bg-clip-text bg-gradient-to-br from-accent to-accent-g text-transparent',
          ]"
        >
          <span v-html="config.customize.homePageName.toUpperCase()"></span>
        </span>
        <span
          id="#name-text"
          :class="[
            'mt-4 2xl:mt-10 xl:mt-5 lg:mt-5 md:mt-4 sm:mt-4',
            '2xl:text-[5rem] xl:text-[4rem] lg:text-[3rem] md:text-[3rem] sm:text-[2.5rem] text-[2.5rem]',
            'primaryFont font-thin tracking-wider leading-[0.75] bg-clip-text bg-gradient-to-br from-accent-g to-accent text-transparent',
          ]"
        >
          STUDENT
        </span>
      </div>
    </div>
    <LinksList class="flex" />
  </div>
</template>
