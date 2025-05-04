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
  height: 100%;
  overflow-y: hidden;
  z-index: 0;
  overflow: hidden;
  background:
    linear-gradient(45deg, transparent 49%, var(--color-white) 49% 51%, transparent 51%),
    linear-gradient(-45deg, transparent 49%, var(--color-white) 49% 51%, transparent 51%);
  background-size: 5em 5em;
  background-color: gradient(to bottom, var(--color-black), var(--color-black-g));
  opacity: 0.03;
  animation: move-pattern-1 80s linear infinite;
  background-repeat: repeat;
}
.dots {
  position: absolute;
  width: 100%;
  height: 200vh;
  overflow-y: hidden;
  z-index: 0;
  overflow: hidden;
  background:
    radial-gradient(circle, var(--color-white) 10%, transparent 11%),
    radial-gradient(circle at bottom left, var(--color-white) 5%, transparent 6%),
    radial-gradient(circle at bottom right, var(--color-white) 5%, transparent 6%),
    radial-gradient(circle at top left, var(--color-white) 5%, transparent 6%),
    radial-gradient(circle at top right, var(--color-white) 5%, transparent 6%);
  background-size: 3em 3em;
  background-color: gradient(to bottom, var(--color-black), var(--color-black-g));
  opacity: 0.03;
  animation: move-pattern-2 80s linear infinite;
  background-repeat: repeat;
}
.stars {
  position: absolute;
  width: 100%;
  height: 200vh;
  overflow-y: hidden;
  z-index: 0;
  overflow: hidden;
  background:
    radial-gradient(
      circle at top left,
      transparent 9%,
      var(--color-white) 10%,
      var(--color-white) 15%,
      transparent 16%
    ),
    radial-gradient(
      circle at bottom left,
      transparent 9%,
      var(--color-white) 10%,
      var(--color-white) 15%,
      transparent 16%
    ),
    radial-gradient(
      circle at top right,
      transparent 9%,
      var(--color-white) 10%,
      var(--color-white) 15%,
      transparent 16%
    ),
    radial-gradient(
      circle at bottom right,
      transparent 9%,
      var(--color-white) 10%,
      var(--color-white) 15%,
      transparent 16%
    ),
    radial-gradient(circle, transparent 25%, var(--color-black) 0%),
    linear-gradient(
      45deg,
      transparent 46%,
      var(--color-white) 47%,
      var(--color-white) 52%,
      transparent 53%
    ),
    linear-gradient(
      135deg,
      transparent 46%,
      var(--color-white) 47%,
      var(--color-white) 52%,
      transparent 53%
    );

  opacity: 0.03;
  background-size: 3em 3em;
  animation: move-pattern-1 80s linear infinite;
  background-color: gradient(to bottom, var(--color-black), var(--color-black-g));
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
