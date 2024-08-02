<template>
  <div class="relative h-screen">
    <section class="relative mx-auto">
      <nav class="flex justify-between items-center text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
          <a class="text-3xl font-bold font-heading letter-animation" href="/">
            <span class="text-wrapper">
              <span>P</span>
              <span>i</span>
              <span>r</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
            </span>
          </a>
          <NavLinks :isMenuOpen="isMenuOpen" />
          <button @click="toggleMenu" class="md:hidden text-white focus:outline-none ml-auto mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import NavLinks from './NavbarLinks.vue';

export default {
  name: 'Navbar',
  components: {
    NavLinks,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    updateHighlight(event) {
      const spans = document.querySelectorAll('.text-wrapper span');
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      
      spans.forEach((span, index) => {
        const spanRect = span.getBoundingClientRect();
        const spanWidth = spanRect.width;
        const spanLeft = spanRect.left - rect.left;
        const spanRight = spanLeft + spanWidth;
        
        if (x >= spanLeft && x <= spanRight) {
          gsap.to(span, {
            color: 'var(--color-highlight)', 
            duration: 0.3,
            ease: 'power2.out',
          });
        } else {
          gsap.to(span, {
            color: '#ffffff', 
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    }
  },
  mounted() {
    const textElement = document.querySelector('.letter-animation');
    if (textElement) {
      textElement.addEventListener('mousemove', this.updateHighlight);
      textElement.addEventListener('mouseleave', () => {
        gsap.to('.text-wrapper span', {
          color: '#ffffff', 
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    }
  }
};
</script>

<style scoped>
nav a {
  color: #ffffff;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: bold; 
}

.letter-animation {
  display: inline-block;
}

.text-wrapper {
  display: inline;
}

.text-wrapper span {
  display: inline;
  font-weight: bold; 
  margin: 0; 
  padding: 0; 
  transition: color 0.3s ease;
}
</style>
