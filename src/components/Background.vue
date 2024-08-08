<template>
  <div class="background"></div>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';

export default {
  name: 'Background',
  setup() {
    onMounted(() => {
      gsap.to('.background', {
        backgroundPosition: '200% 200%',
        duration: 20,
        repeat: -1,
        ease: 'linear'
      });
    });
  }
};
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  background-size: 400% 400%;
  background: url(../assets/image.jpg);
}
</style>
