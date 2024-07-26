<template>
    <div>
      <About/>
      <FeaturedAlbum/>
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
        color: #d5472c;
    }
  </style>
  