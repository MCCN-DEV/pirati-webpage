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
    <div class="half-circle" @click="redirectToPage()">
      <img src="@/assets/svg/youtube.svg" alt="YouTube" class="w-6 h-6 svg-icon"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import YoutubeVideo from "@/components/VideoComponent.vue";

function redirectToPage() {
  window.open('https://music.youtube.com/browse/UCe1WLkwXx7v3lgM7ziqp5qw', '_blank');
}
</script>

<style scoped>
.half-circle {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 50px;
  background-color: var(--color-highlight);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.svg-icon {
  display: block;
  text-decoration: none;
}

img {
  width: 40px;
  height: 40px;
}

.half-circle:hover {
  transform: translateX(-50%) scale(1.5);
}

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
