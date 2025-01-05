<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <main class="content-container">
      <div class="flex flex-wrap justify-around">
        <youtube-video class="w-full sm:w-1/2 md:w-1/3 p-2" title="PIRATI - LORA HOLLIDAY (Official video 1994)"
                       video-url="https://www.youtube.com/embed/LrUmTQaAJyg"></youtube-video>
        <youtube-video class="w-full sm:w-1/2 md:w-1/3 p-2" title="PIRATI - 180/120 (Official video 1994)"
                       video-url="https://www.youtube.com/embed/RZDhQo45tt4"></youtube-video>
        <youtube-video class="w-full sm:w-1/2 md:w-1/3 p-2" title="PIRATI - SANJAO SAM DA SAM CAR (Official video 1994)"
                       video-url="https://www.youtube.com/embed/qLiOHc5AkVI"></youtube-video>
        <youtube-video class="w-full sm:w-1/2 md:w-1/3 p-2" title="PIRATI - O ČEMU MISLIŠ (Official video 1994)"
                       video-url="https://www.youtube.com/embed/yLXcgaceBog">
        </youtube-video>
        <youtube-video class="w-full sm:w-1/2 md:w-1/3 p-2" title='PIRATI - PGP PROMOTIVNI TV SPOT ZA LP "LORA HOLLIDAY" (Official video 1994)'
                       video-url="https://www.youtube.com/embed/p6xw42oCim0"></youtube-video>

      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import YoutubeVideo from "@/components/VideoComponent.vue";
</script>

<style scoped>
.h-screen {
  height: 10vh;
}
</style>