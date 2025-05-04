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
    <div id="content" class="text-white flex gap-5 flex-col lg:flex-row">
      <div
        id="#leftside"
        class="flex flex-col justify-start w-full xl:w-fit items-center h-fit gap-5"
      >
        <div id="#content-cards" class="h-full w-full flex flex-wrap p-5">
          <div
            :class="[
              'p-5',
              'outAnim animate__animated animate__bounceIn animate__delay-1s',
              'backdrop-blur-[3px] backdrop-contrast-105 rounded-2xl',
            ]"
          >
            <img src="@/assets/images/stars/shar.png" :class="['rounded-2xl', 'w-fit h-fit']" />
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
              <!-- // TODO: fix this thing -->
              lalalalalalalalalalalalalalalala asdasd as das
              <br />asdasdaad;gojadgo;ahdghija<br />a sd asd as d asd asd a sd
            </p>
          </div>
        </div>
      </div>
      <div
        id="#rightside"
        class="flex flex-col justify-start md:justify-end w-full xl:w-fit items-center h-full xl:h-full gap-5"
      >
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
          <p class="text-[1rem] lowercase leading-normal w-full"></p>
        </div>
      </div>
    </div>
  </div>
</template>
