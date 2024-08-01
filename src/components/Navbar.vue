<template>
  <div class="relative h-screen">
    <section class="relative mx-auto">
      <nav class="flex justify-between items-center text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
          <a class="text-3xl font-bold font-heading" href="/">
            Pirati
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
    animateLinks() {
      gsap.fromTo(
        '.nav-link::after',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  },
  mounted() {
    // Trigger animations on hover for links with class 'nav-link'
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('mouseover', this.animateLinks);
      link.addEventListener('mouseout', () => {
        gsap.to(link.querySelector('::after'), { scaleX: 0, duration: 0.3 });
      });
    });
  }
};
</script>


<style scoped>
nav a {
  color: #ffffff;
  position: relative;
  display: inline-block;
  padding-bottom: 5px; 
  text-decoration: none; 
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-highlight);
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>

