<template>
  <div class="w-full flex flex-col md:flex-row justify-between items-center">
    <ul class="hidden md:flex md:px-4 md:mx-auto md:font-semibold md:font-heading md:space-x-4 lg:space-x-6 xl:space-x-12">
      <!-- Links with Dropdown -->
      <li class="relative" @mouseover="showDropdown('about')" @mouseout="hideDropdown('about')">
        <div class="relative">
          <a class="animated-link" href="/about">About Us
            <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <ul class="absolute dropdown-menu bg-[#0d1422] text-white font-semibold mt-2 w-48 z-10" :class="{ 'show': activeDropdown === 'about' }">
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Piraterija i Piratstvo</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Prva Postava Grupe</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Prvi Nastup</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Potpisivanje Ugovora</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Tiraž Rasprodat</a></li>
          </ul>
        </div>
      </li>
      <li class="relative" @mouseover="showDropdown('gallery')" @mouseout="hideDropdown('gallery')">
        <div class="relative">
          <a class="animated-link" href="#" @click.prevent="scrollToSection('gallery')">Gallery
            <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <ul class="absolute dropdown-menu bg-[#0d1422] text-white font-semibold mt-2 w-48 z-10" :class="{ 'show': activeDropdown === 'gallery' }">
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Submenu 1</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Submenu 2</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">Submenu 3</a></li>
          </ul>
        </div>
      </li>
      <li class="relative" @mouseover="showDropdown('albums')" @mouseout="hideDropdown('albums')">
        <div class="relative">
          <a class="animated-link" href="#" @click.prevent="scrollToSection('albums')">Albums
            <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <ul class="absolute dropdown-menu bg-[#0d1422] text-white font-semibold mt-2 w-48 z-10" :class="{ 'show': activeDropdown === 'albums' }">
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">"Lora Holliday"</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#">"Lora Holliday LIVE"</a></li>
          </ul>
        </div>
      </li>
      <li class="relative">
        <a class="animated-link" href="#" @click.prevent="scrollToSection('contact')">Contact</a>
      </li>
    </ul>

    <ul v-if="isMenuOpen" class="md:hidden absolute top-full right-0 w-full bg-[#0d1422]/80 text-white font-semibold z-50">
      <li class="w-full" v-if="currentRoute !== '/about'"><a class="block w-full px-4 py-2 hover:bg-[#1a2630] animated-link" href="#" @click.prevent="scrollToSection('gallery')">Gallery</a></li>
      <li class="w-full" v-if="currentRoute !== '/about'"><a class="block w-full px-4 py-2 hover:bg-[#1a2630] animated-link" href="#" @click.prevent="scrollToSection('albums')">Albums</a></li>
      <li class="w-full"><a class="block w-full px-4 py-2 hover:bg-[#1a2630] animated-link" href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
      <li class="w-full"><a class="block w-full px-4 py-2 hover:bg-[#1a2630] animated-link" href="/about">About Us</a></li>
    </ul>

    <!-- Social Media Icons -->
    <div class="hidden md:flex items-center space-x-3 lg:space-x-5">
      <a href="https://music.youtube.com/search?q=pirati+lora+holliday" class="svg-icon">
        <img src="@/assets/svg/youtube.svg" alt="YouTube" class="w-6 h-6">
      </a>
      <a href="https://open.spotify.com/album/7q0dHs3EZYLrydAKRktZ25?si=mRHxBb3US5a3dZRhzQZktg" class="svg-icon">
        <img src="@/assets/svg/spotify.svg" alt="Spotify" class="w-6 h-6">
      </a>
      <a href="https://music.apple.com/us/album/lora-holliday/1748322338" class="svg-icon">
        <img src="@/assets/svg/applemusic.svg" alt="Apple Music" class="w-6 h-6">
      </a>
      <a href="https://www.deezer.com/search/pirati%20lora%20holliday" class="svg-icon">
        <img src="@/assets/svg/deezer.svg" alt="Deezer" class="w-6 h-6">
      </a>
      <a href="https://www.discogs.com/release/5517537-Pirati-Lora-Holliday" class="svg-icon">
        <img src="@/assets/svg/discogs.svg" alt="Discogs" class="w-6 h-6">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDropdown: null,
    };
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showDropdown(name) {
      this.activeDropdown = name;
    },
    hideDropdown(name) {
      if (this.activeDropdown === name) {
        this.activeDropdown = null;
      }
    },
    toggleMenu() {
      this.$emit('update:isMenuOpen', !this.isMenuOpen);
    },
    scrollToSection(section) {
      const element = document.getElementById(section);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    },
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
};
</script>


<style scoped>
a.dropdown-animation {
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 15px;
}

.dropdown-animation::after {
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

a.dropdown-animation:hover::after {
  transform: scaleX(1);
}

a.animated-link {
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 20px;
}

a.animated-link::after {
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

a.animated-link:hover::after {
  transform: scaleX(1);
}

a svg {
  display: inline-block;
  padding-bottom: 3px;
}

.svg-icon img {
  filter: invert(1);
  transition: transform 0.2s ease;
}

.svg-icon img:hover {
  transform: scale(1.1);
}

.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .dropdown-menu {
    display: none;
  }
}
</style>
