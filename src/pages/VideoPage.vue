<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <main class="content-container">
      <div class="flex flex-wrap">
        <div class="p-2 px-8 w-full 3-col:w-1/3 2-col:w-1/2 1-col:w-full">
          <youtube-video
              title="PIRATI - LORA HOLLIDAY (Official video 1994)"
              video-url="https://www.youtube.com/embed/LrUmTQaAJyg"
              class="w-full"
          ></youtube-video>
        </div>
        <div class="p-2 px-8 w-full 3-col:w-1/3 2-col:w-1/2 1-col:w-full">
          <youtube-video
              title="PIRATI - 180/120 (Official video 1994)"
              video-url="https://www.youtube.com/embed/RZDhQo45tt4"
              class="w-full"
          ></youtube-video>
        </div>
        <div class="p-2 px-8 w-full 3-col:w-1/3 2-col:w-1/2 1-col:w-full">
          <youtube-video
              title="PIRATI - SANJAO SAM DA SAM CAR (Official video 1994)"
              video-url="https://www.youtube.com/embed/qLiOHc5AkVI"
              class="w-full"
          ></youtube-video>
        </div>
        <div class="p-2 px-8 w-full 3-col:w-1/3 2-col:w-1/2 1-col:w-full">
          <youtube-video
              title="PIRATI - O ČEMU MISLIŠ (Official video 1994)"
              video-url="https://www.youtube.com/embed/yLXcgaceBog"
              class="w-full"
          ></youtube-video>
        </div>
        <div class="p-2 px-8 w-full 3-col:w-1/3 2-col:w-1/2 1-col:w-full">
          <youtube-video
              title='PIRATI - PGP PROMOTIVNI TV SPOT ZA LP "LORA HOLLIDAY" (Official video 1994)'
              video-url="https://www.youtube.com/embed/p6xw42oCim0"
              class="w-full"
          ></youtube-video>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import YoutubeVideo from "@/components/VideoComponent.vue";
</script>

<style scoped>
/*Don't remove this class*/
.h-screen {
  height: 10vh;
}

@media (max-width: 1680px) {
  .responsive-column {
    width: 50%; /* 2 columns */
  }
}

/* Switch to one column when the width is less than 560px * 2 */
@media (max-width: 1120px) {
  .responsive-column {
    width: 100%; /* 1 column */
  }
}
</style>
