<template>
  <div class="spotify-embed">
    <iframe
      style="border-radius: 12px;"
      :src=spotifyUrlProp
      width="100%"
      height="152"
      frameborder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      class="rounded-lg"
    ></iframe>
  </div>
</template>

<script>
export default {
  props:{
    spotifyUrlProp: String
  },
  name: 'SpotifyEmbed',
};
</script>

<style scoped>
.spotify-embed {
  display: flex;
  justify-content: center;
  align-items: center;
}
iframe {
  border: none;
}
</style>
