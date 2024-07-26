<template>
  <header>
   <Navbar/>
  </header>
  <body>
    <Background/>
    <HeroSection/>
    <GallerySection/>
    <Carousel/>
  </body>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Background from '../components/Background.vue';
import HeroSection from '../components/HeroSection.vue';
import GallerySection from '../components/Showcase.vue';
import Carousel from '../components/Carousel.vue';
export default {
  name: 'Home',
  components: {
    Navbar,
    Background,
    HeroSection,
    GallerySection,
    Carousel
  }
}
</script>