<template>
  <div class="w-full flex justify-between items-center">
    <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Albums</a></li>
      <li><a href="#">Radio</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">About Us</a></li>
    </ul>

    <div class="hidden md:flex items-center space-x-5">
      <a href="#" class="svg-icon">
        <img src="@/assets/svg/youtube.svg" alt="YouTube" class="w-6 h-6">
      </a>
      <a href="#" class="svg-icon">
        <img src="@/assets/svg/spotify.svg" alt="Spotify" class="w-6 h-6">
      </a>
      <a href="#" class="svg-icon">
        <img src="@/assets/svg/applemusic.svg" alt="Apple Music" class="w-6 h-6">
      </a>
      <a href="#" class="svg-icon">
        <img src="@/assets/svg/deezer.svg" alt="Deezer" class="w-6 h-6">
      </a>
      <a href="#" class="svg-icon">
        <img src="@/assets/svg/discogs.svg" alt="Discogs" class="w-6 h-6">
      </a>
    </div>

    <ul v-if="isMenuOpen" class="md:hidden absolute top-full right-0 w-full bg-[#0d1422]/80 text-white font-semibold z-50">
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#">Gallery</a></li>
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#">Albums</a></li>
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#">Radio</a></li>
      <li><a class="block px-4 py-2 hover:bg-[#1a2630]" href="#">Contact</a></li>
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
};
</script>

<style scoped>
a:hover {
  color: #d5472c;
}

.svg-icon img {
  filter: invert(1);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.svg-icon:hover img {
  transform: scale(1.1);
  filter: invert(1) brightness(2);
}
</style>
