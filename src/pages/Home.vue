<template>
  <div>
    <header>
      <Navbar />
    </header>
    <Background />
    <body>
      <HeroSection />
      <Showcase class="showcase" />
      <FeaturedAlbum class="featured-album" />
      <Carousel/>
      <Footer />
    </body>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Background from '../components/Background.vue';
import HeroSection from '../components/HeroSection.vue';
import Carousel from '../components/Carousel.vue';
import Footer from '../components/Footer.vue';
import FeaturedAlbum from '@/components/FeaturedAlbum.vue';
import Showcase from '@/components/Showcase.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Home',
  components: {
    Navbar,
    Background,
    HeroSection,
    Showcase,
    Carousel,
    Footer,
    FeaturedAlbum,
  },
  mounted() {
    gsap.fromTo(
      '.showcase',
      { opacity: 0, filter: 'blur(10px)' }, 
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.showcase',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      '.featured-album',
      { opacity: 0, filter: 'blur(10px)' }, 
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.featured-album',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5,
        },
      }
    );
  },
};
</script>


