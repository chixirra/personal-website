<script setup lang="ts">
defineProps({
  pattern: {
    type: String,
    default: 'squares',
  },
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="pattern"
      :key="pattern"
      id="background-pattern"
      :class="[pattern, 'animate__animated', 'animate__fadeIn']"
    ></div>
  </transition>
</template>

<style scoped>
@keyframes move-pattern-1 {
  0% {
    background-position:
      0 0,
      0 0,
      0 0,
      0 0,
      0 0;
  }
  100% {
    background-position:
      100% 160%,
      100% 160%,
      100% 160%,
      100% 160%,
      100% 160%;
  }
}

@keyframes move-pattern-2 {
  0% {
    background-position:
      0 0,
      0 0,
      0 0,
      0 0,
      0 0;
  }
  100% {
    background-position:
      -100% 160%,
      -100% 160%,
      -100% 160%,
      -100% 160%,
      -100% 160%;
  }
}

.squares {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  z-index: 0;
  overflow: hidden;
  background:
    linear-gradient(45deg, transparent 49%, #ffffff 49% 51%, transparent 51%),
    linear-gradient(-45deg, transparent 49%, #ffffff 49% 51%, transparent 51%);
  filter: contrast(100);
  background-size: 5em 5em;
  background-color: gradient(to bottom, var(--color-black), var(--color-black-g));
  opacity: 0.04;
  animation: move-pattern-1 40s linear infinite;
  background-repeat: repeat;
}

.dots {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  z-index: 0;
  overflow: hidden;
  background:
    radial-gradient(circle, #ffffff 10%, transparent 11%),
    radial-gradient(circle at bottom left, #ffffff 5%, transparent 6%),
    radial-gradient(circle at bottom right, #ffffff 5%, transparent 6%),
    radial-gradient(circle at top left, #ffffff 5%, transparent 6%),
    radial-gradient(circle at top right, #ffffff 5%, transparent 6%);
  background-size: 3em 3em;
  filter: contrast(100);
  background-color: gradient(to bottom, var(--color-black), var(--color-black-g));
  opacity: 0.03;
  animation: move-pattern-2 40s linear infinite;
  background-repeat: repeat;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
