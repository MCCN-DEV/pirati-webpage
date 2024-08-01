<template>
  <div class="container mx-auto px-4 py-8 md:px-6 lg:px-8">
    <About class="mb-8" />
    <FeaturedAlbum class="mb-8" />
  </div>
</template>

<script>
import About from './ShowcaseAbout.vue';
import FeaturedAlbum from './FeaturedAlbum.vue';

export default {
  name: 'ShowcaseSection',
  components: {
    About,
    FeaturedAlbum,
  }
}
</script>

<style scoped>
.highlight {
    color: var(--color-highlight);
}
</style>
