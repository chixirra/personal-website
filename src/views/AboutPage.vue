<script setup lang="ts">
import HandleNavigation from '@/utils/HandleNavigation'

// TODO: to add backdrop-contrast-80 to all the backgrounds and figure out how to make it darker!
</script>

<template>
  <div
    id="#about-me"
    class="text-white flex flex-col justify-center items-center content-center md:flex-row"
  >
    <div id="navigation">
      <div
        id="#navandpage"
        class="primaryFont leading-tight font-medium m-5 gap-5 flex flex-col items-center justify-center"
      >
        <div
          :class="[
            'rounded-full backdrop-blur-[3px] backdrop-contrast-80 p-5',
            'outAnim animate__animated animate__backInLeft',
            'flex flex-row md:flex-col justify-center items-center gap-5',
            'text-[1.8rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[3rem] 2xl:text-[3rem]',
            'w-full xl:w-fit',
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
              'animate__animated animate__heartBeat animate__delay-1s',
            ]"
          />
        </div>

        <div
          :class="[
            'rounded-full backdrop-blur-[3px] backdrop-contrast-80 ',
            'outAnim animate__animated animate__backInLeft',
            'flex flex-wrap justify-center items-center gap-2',
            'text-[1.4rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]',
            'w-full md:w-fit text-center uppercase',
          ]"
        >
          <span
            :class="[
              'flex flex-row md:flex-col justify-center items-center gap-2',
              'primaryFont lowercase font-bold w-full p-5',
              'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
            ]"
          >
            <span
              class="text-[2.1rem] sm:text-[2.1rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[3.2rem] 2xl:text-[3.2rem]"
              >#</span
            >
            <div class="flex flex-row gap-x-2 md:flex-col justify-center items-center text-white">
              <a>a</a><a>b</a><a>o</a><a>u</a><a>t</a>&nbsp;<a>m</a><a>e</a>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div
      id="content"
      class="text-white flex flex-wrap xl:flex-row justify-center w-screen h-screen"
    >
      <div
        id="#leftside"
        class="flex flex-col lg:justify-start w-full xl:w-fit items-center h-fit xl:h-screen p-5"
      >
        <div
          :class="[
            'secondaryFont',
            'outAnim animate__animated animate__backInDown',
            'rounded-2xl backdrop-blur-[3px] backdrop-contrast-80 m-5 p-5 h-fit',
            'w-full xl:w-fit',
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
          <p class="text-[1rem] lowercase leading-normal w-fit max-w-[45rem]">
            - feel free to call me cristian :) <br />- I'm a 17-year-old Romanian high school
            student, learning UI/UX design
            <span class="italic opacity-33"
              >i can't say this site is very good work in that regard</span
            >
            and programming.<br />
            - My interests lie in computers and digital content; gaming (Valorant, modded Minecraft,
            ghost of tsushima, and many other games...), photography, listening to music,
            rainy/foggy walks, nature at night, reading manga, watching anime, ocasionally drawing.
            <br />- I love animals, especially my pets
            <span class="italic opacity-33">check the star ;)</span><br />
            - i strive to constantly improve my abilities
            <span class="italic opacity-33">that's a lie, im lazy</span>
          </p>
        </div>
        <div
          :class="[
            'secondaryFont',
            'outAnim animate__animated animate__backInDown',
            'rounded-2xl backdrop-blur-[3px] backdrop-contrast-80 m-5 p-5 h-fit',
            'w-full xl:w-fit',
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
            git, unity, figma, [ts] typescript, [js] javascript, [html] html, [css] css, [vue]
            vue.js, [c-sharp] c#, [fb] firebase, mongodb, [ex] express.js
          </p>
        </div>
      </div>
    </div>
    <div
      id="#rightside"
      class="flex flex-col justify-end w-full xl:w-fit items-center h-fit xl:h-screen p-5"
    >
      <div
        :class="[
          'secondaryFont',
          'outAnim animate__animated animate__backInUp',
          'rounded-2xl backdrop-blur-[3px] backdrop-contrast-80 m-5 p-5 h-fit',
          'w-full xl:w-fit',
          'flex flex-col text-justify items-start',
          'text-[2rem] w-full uppercase text-center',
        ]"
      >
        <div class="flex flex-row text-left justify-center gap-3 primaryFont lowercase font-bold">
          <span
            :class="[
              'bg-gradient-to-br from-accent to-accent-g text-transparent bg-clip-text',
              'text-[2.1rem] 2xl:text-[3.2rem] xl:text-[3.2rem] lg:text-[2.6rem] md:text-[2.2rem] sm:text-[2.1rem]',
            ]"
            >,,</span
          >
          <p class="text-[1rem] lowercase italic font-light leading-normal w-full">
            "Code is like humor. When you have to explain it, it’s bad." - Cory House
          </p>
        </div>
      </div>
      <div
        :class="[
          'secondaryFont',
          'outAnim animate__animated animate__backInUp',
          'rounded-2xl backdrop-blur-[3px] backdrop-contrast-80 m-5 p-5 h-fit',
          'w-full xl:w-fit',
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
        <p class="text-[1rem] lowercase leading-normal w-full">
          - I got into programming via Discord bots when i was 10, despite knowing nothing about it.
          I proudly made a simple bot using a lot of YouTube tutorials. Later, I learned coding
          through trial and error, trying to make projects way beyond my skill level (i’m sad to say
          i never saved them). From Discord bots, I moved on to building my own database system,
          learned basic HTML and CSS, and Minecraft servers too! I spent around 3-4 years building
          Minecraft servers and even ran my own public server for a while, which actually earned me
          my first money. After a break from all the gaming stuff, I learned JavaScript to build a
          personal API to help a community i was a part of at the time. <br />- Watching dev logs
          inspired me to try game development, leading me to explore game art and music. While I
          didn't particularly do well in those areas, the learning process was very much enjoyable
          and rewarding to me, seeing my ideas come to life
        </p>
      </div>
    </div>
  </div>
</template>
