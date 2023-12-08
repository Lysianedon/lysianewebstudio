<template>
  <div class="greetings">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 class="green your-element">Hello :)</h1>
    </transition>
    <!-- <img class="wide-image" src="../assets/astronaut-4k-ultra-widescreen-3anbtnv46uqaugpp.jpg" alt="Widescreen Image" />
    <img class="img" src="../assets/astronaut-4k-ultra-widescreen-3anbtnv46uqaugpp.jpg" alt="Widescreen Image" /> -->
  </div>
</template>

<script>
import { onMounted, defineProps } from "vue"; 

export default {
  setup() {
    // onMounted(() => {
      const beforeEnter = (el) => {
        console.log("beforeEnter...");
        el.style.transform = "translateY(120px)";
        el.style.opacity = 0;
      }

      const enter = (el, done) => {
        console.log("starting to enter...");
        gsap.to(el, {
          duration: .6,
          y: 0,
          opacity: 1,
          ease: 'bounce.out',
          onComplete: done,

        });
      }

      const afterEnter = () => {
        console
      }

   
    // });

    return {beforeEnter, enter};
  },
};
</script>

<style scoped>
</style>
