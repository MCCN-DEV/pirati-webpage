<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="w-full px-4 md:px-20 py-4 md:py-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <a href="#" class="flex items-center mb-4 md:mb-0 space-x-3 rtl:space-x-reverse">
          <span class="highlight self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Pirati</span>
        </a>
        <div class="flex flex-col md:flex-row md:items-start md:space-x-12 mt-4 md:mt-0">
          <div class="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Contact</h4>
            <ul class="space-y-3 mt-2">
              <li class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">+(381)000-000000</li>
              <li class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">email@email.com</li>
              <li class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Contact</li>
              <li class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Privacy Policy</li>
            </ul>
          </div>
          <div class="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Quick Links</h4>
            <ul class="space-y-3 mt-2">
              <li><a href="#gallery" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a href="#albums" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Albums</a></li>
              <li><a href="#radio" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Radio</a></li>
              <li><a href="#about" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">About Us</a></li>
            </ul>
          </div>
          <div class="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Follow Us</h4>
            <div class="flex space-x-4 mt-2">
              <a href="https://music.youtube.com/search?q=pirati+lora+holliday" class="svg-icon">
                <img src="@/assets/svg/youtube.svg" alt="YouTube" class="w-8 h-8 hover:scale-110 transition-transform duration-300">
              </a>
              <a href="https://open.spotify.com/album/7q0dHs3EZYLrydAKRktZ25?si=mRHxBb3US5a3dZRhzQZktg" class="svg-icon">
                <img src="@/assets/svg/spotify.svg" alt="Spotify" class="w-8 h-8 hover:scale-110 transition-transform duration-300">
              </a>
              <a href="https://music.apple.com/us/album/lora-holliday/1748322338" class="svg-icon">
                <img src="@/assets/svg/applemusic.svg" alt="Apple Music" class="w-8 h-8 hover:scale-110 transition-transform duration-300">
              </a>
              <a href="https://www.deezer.com/search/pirati%20lora%20holliday" class="svg-icon">
                <img src="@/assets/svg/deezer.svg" alt="Deezer" class="w-8 h-8 hover:scale-110 transition-transform duration-300">
              </a>
              <a href="https://www.discogs.com/release/5517537-Pirati-Lora-Holliday" class="svg-icon">
                <img src="@/assets/svg/discogs.svg" alt="Discogs" class="w-8 h-8 hover:scale-110 transition-transform duration-300">
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024 <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">MCCN</a>.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: trans;
}

.svg-icon img {
  filter: invert(1);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.highlight {
  position: relative;
  transition: color 0.3s ease;
}

.highlight:hover {
  position: absolute;
  color: #d5472c;
  transition: 0.3s ease;
}

.highlight:hover::before {
  width: 100%;
}
</style>
