<template>
  <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
    <div class="text-center mb-8">
      <h2 id="gallery" class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Gale<span class="font-extrabold highlight">rija</span>
      </h2>
    </div>
  </div>
  <div class="container mx-auto px-4 py-8 md:px-6 lg:px-8">
    <div class="relative overflow-hidden shadow-carousel modern-carousel">
      <div class="carousel-container">
        <div
          v-for="(image, index) in carouselImages"
          :key="index"
          :class="{ 'carousel-slide-active': activeSlide === index + 1, 'carousel-slide': true }"
          ref="carouselSlides"
        >
        <div class="carousel-image" :style="{ backgroundImage: `url(${image})` }"></div>
        </div>
      </div>

      <button @click="prevSlide" class="nav-button nav-button-left">
        <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button @click="nextSlide" class="nav-button nav-button-right">
        <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { carouselImages } from '../data/constants';
import { gsap } from 'gsap';

export default {
  name: 'Carousel',
  data() {
    return {
      activeSlide: 1,
      carouselImages,
      timer: null,
    };
  },
  mounted() {
    this.logImages();
  },
  methods: {
    startAutoScroll() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 8000);
    },
    prevSlide() {
      this.animateSlideTransition(-1);
      this.activeSlide = this.activeSlide === 1 ? this.carouselImages.length : this.activeSlide - 1;
      this.startAutoScroll();
    },
    nextSlide() {
      this.animateSlideTransition(1);
      this.activeSlide = this.activeSlide === this.carouselImages.length ? 1 : this.activeSlide + 1;
      this.startAutoScroll();
    },
    logImages() {
      this.carouselImages.forEach((image, index) => {
        console.log(`Image ${index + 1}: ${image}`);
      });
    },
    animateSlideTransition(direction) {
      const slides = this.$refs.carouselSlides;
      const activeSlideIndex = this.activeSlide - 1;
      const nextSlideIndex = (activeSlideIndex + direction + slides.length) % slides.length;

      gsap.fromTo(
        slides[nextSlideIndex],
        { opacity: 0, x: direction * 100 + '%' },
        { opacity: 1, x: '0%', duration: 1 }
      );
      gsap.fromTo(
        slides[activeSlideIndex],
        { opacity: 1, x: '0%' },
        { opacity: 0, x: -direction * 100 + '%', duration: 1 }
      );
    },
  },
  created() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
.relative {
  position: relative;
  width: 100%;
}

.highlight {
  color: var(--color-highlight);
}

.modern-carousel {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.modern-carousel:hover {
  transform: translateY(-3px);
}

.carousel-container {
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
}

.carousel-slide {
  width: 100%;
  max-width: 70vw;
  margin: 0 auto;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel-slide-active {
  opacity: 1;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.1);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-highlight);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: var(--color-highlight-hover);
}

.nav-icon {
  width: 20px;
  height: 20px;
  fill: white;
}

.nav-button-left {
  left: 5%;
}

.nav-button-right {
  right: 5%;
}

@media (max-width: 768px) {
  .carousel-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .nav-button-left {
    left: 2%;
  }

  .nav-button-right {
    right: 2%;
  }
}
</style>
