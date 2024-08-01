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
  },
};
</script>

<style scoped>
nav {
  background-color: #0d1422;
}

nav a {
  color: #ffffff;
}

nav a:hover {
  color: #d5472c;
}

header svg {
  stroke: #ffffff;
}
</style>
