<template>
  <header>
   <Navbar/>
  </header>
  <body>
    <Background/>
    <HeroSection/>
    <GallerySection/>
  </body>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Background from '../components/Background.vue';
import HeroSection from '../components/HeroSection.vue';
import GallerySection from '../components/Showcase.vue';
export default {
  name: 'AboutUs',
  components: {
    Navbar,
    Background,
    HeroSection,
    GallerySection
  }
}
</script>