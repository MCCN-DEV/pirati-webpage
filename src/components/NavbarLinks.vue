<template>
  <div class="w-full flex flex-col md:flex-row justify-between items-center">
    <!-- Desktop Navigation Links -->
    <ul class="hidden md:flex md:px-4 md:mx-auto md:font-semibold md:font-heading md:space-x-4 lg:space-x-6 xl:space-x-12">
      <!-- About Us with Dropdown for Desktop -->
      <li class="relative" @mouseenter="showDropdown('about')" @mouseleave="hideDropdown('about')">
        <a class="animated-link" href="/about" @click.prevent="toggleDropdown('about')">
          About Us
          <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </a>
        <ul class="absolute dropdown-menu bg-[#0d1422] text-white font-semibold mt-2 w-48 z-10" :class="{ 'show': activeDropdown === 'about' }">
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/about">Sve o nama</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/1">Piraterija i Piratstvo</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/2">Prva Postava Grupe</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/3">Prvi Nastup</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/4">Potpisivanje Ugovora</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/5">Tiraž Rasprodat</a></li>
        </ul>
      </li>

      <!-- Albums with Dropdown for Desktop -->
      <li class="relative" @mouseenter="showDropdown('albums')" @mouseleave="hideDropdown('albums')">
        <a class="animated-link" href="#" @click.prevent="toggleDropdown('albums')">
          Albums
          <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </a>
        <ul class="absolute dropdown-menu bg-[#0d1422] text-white font-semibold mt-2 w-48 z-10" :class="{ 'show': activeDropdown === 'albums' }">
          <li><router-link class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" :to="{ name: 'AlbumInfo', params: { album: 'loraHolliday' } }">Lora Holliday</router-link></li>
          <li><router-link class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" :to="{ name: 'AlbumInfo', params: { album: 'loraHollidayLive' } }">Lora Holliday LIVE</router-link></li>
        </ul>
      </li>

        <!-- Gallery with Dropdown for Desktop -->
        <li class="relative" @mouseenter="showDropdown('gallery')" @mouseleave="hideDropdown('gallery')">
          <a class="animated-link" href="#" @click.prevent="toggleDropdown('gallery')">
            Gallery
            <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <ul class="absolute dropdown-menu bg-[#0d1422] text-white font-semibold mt-2 w-48 z-10" :class="{ 'show': activeDropdown === 'gallery' }">
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-4')">Prva Postava</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-5')">Prvi Nastup</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-3')">Tiraž Rasprodat</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-1')">Section 1</a></li>
            <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-2')">Section 2</a></li>
          </ul>
        </li>

      <!-- Contact for Desktop -->
      <li class="relative">
        <a class="animated-link" href="#" @click.prevent="scrollToSection('contact')">Contact</a>
      </li>
    </ul>

    <!-- Mobile Menu (Only visible when isMenuOpen is true) -->
    <ul v-if="isMenuOpen" class="md:hidden absolute top-full right-0 w-full bg-[#0d1422]/80 text-white font-semibold z-50">
      <!-- About Us with Dropdown for Mobile -->
      <li>
        <a class="block w-full px-4 py-2 flex justify-between items-center hover:bg-[#1a2630] animated-link"
           href="#"
           @click.prevent="toggleDropdown('about')">
          About Us
          <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </a>
        <ul v-if="activeDropdown === 'about'" class="pl-4">
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/about">Sve o nama</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/1">Piraterija i Piratstvo</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/2">Prva Postava Grupe</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/3">Prvi Nastup</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/4">Potpisivanje Ugovora</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="/paragraph/5">Tiraž Rasprodat</a></li>
        </ul>
      </li>

      <!-- Albums with Dropdown for Mobile -->
      <li>
        <a class="block w-full px-4 py-2 flex justify-between items-center hover:bg-[#1a2630] animated-link"
          href="#"
          @click.prevent="toggleDropdown('albums')">
          Albums
          <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </a>
        <ul v-if="activeDropdown === 'albums'" class="pl-4">
          <li><router-link class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" :to="{ name: 'AlbumInfo', params: { album: 'loraHolliday' } }">Lora Holliday</router-link></li>
          <li><router-link class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" :to="{ name: 'AlbumInfo', params: { album: 'loraHollidayLive' } }">Lora Holliday LIVE</router-link></li>
        </ul>
      </li>

      <!-- Gallery with Dropdown for Mobile -->
      <li>
        <a class="block w-full px-4 py-2 flex justify-between items-center hover:bg-[#1a2630] animated-link"
           href="#"
           @click.prevent="toggleDropdown('gallery')">
          Gallery
          <svg class="w-6 h-6 ml-1 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </a>
        <ul v-if="activeDropdown === 'gallery'" class="pl-4">
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-4')">Prva Postava</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-5')">Prvi Nastup</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-3')">Tiraž Rasprodat</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-1')">Section 1</a></li>
          <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] dropdown-animation" href="#" @click.prevent="navigateToGallery('section-2')">Section 2</a></li>
        </ul>
      </li>
      
      <!-- Contact for Mobile -->
      <li><a class="block w-full px-4 py-2 hover:bg-[#1a2630] animated-link" href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
    </ul>

    <!-- Social Media Icons (Desktop only) -->
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
import { nextTick } from 'vue';

export default {
  props: ['isMenuOpen'],
  data() {
    return {
      activeDropdown: null,
      currentRoute: this.$route.path
    };
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
    toggleDropdown(name) {
      this.activeDropdown = this.activeDropdown === name ? null : name;
    },
    navigateToGallery(sectionId) {
      this.$router.push({ path: `/gallery#${sectionId}` }).catch(() => {});
      this.scrollToSection(sectionId);
      this.activeDropdown = null;
    },
    scrollToSection(sectionId) {
      nextTick(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
      this.activeDropdown = null;
    }
  },
  watch: {
    $route(to) {
      this.currentRoute = to.path;
    }
  }
};
</script>

<style scoped>
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}
.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
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

.md:hidden ul {
  display: flex;
  flex-direction: column;
}

.md:hidden a {
  padding: 1rem 2rem;
  display: block;
  text-align: left;
  width: 100%;
}

.md:hidden ul li a:hover {
  background-color: #1a2630;
}
</style>
