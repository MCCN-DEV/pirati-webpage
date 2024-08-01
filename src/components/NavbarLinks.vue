<template>
  <div class="w-full flex flex-col md:flex-row justify-between items-center">
    <ul class="hidden md:flex md:px-4 md:mx-auto md:font-semibold md:font-heading md:space-x-4 lg:space-x-6 xl:space-x-12">
      <li><a href="#" @click.prevent="scrollToSection('gallery')">Gallery</a></li>
      <li><a href="#" @click.prevent="scrollToSection('albums')">Albums</a></li>
      <li><a href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
      <li><a href="/about">About Us</a></li>
    </ul>

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

    <ul v-if="isMenuOpen" class="md:hidden absolute top-full right-0 w-full bg-[#0d1422]/80 text-white font-semibold z-50">
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#" @click.prevent="scrollToSection('gallery')">Gallery</a></li>
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#" @click.prevent="scrollToSection('albums')">Albums</a></li>
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#">About Us</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
a:hover:not(.svg-icon) {
  color: var(--color-highlight);
  padding-bottom: 5px;
  border-bottom: 2px solid var(--color-highlight)
}

.svg-icon img {
  filter: invert(1);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.svg-icon:hover img {
  transform: scale(1.1);
  filter: invert(1) contrast(1.2);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
