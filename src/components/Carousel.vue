<template>
  <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
    <div class="text-center mb-8">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Gale<span class="font-extrabold highlight">rija</span></h2>
    </div>
  </div>
  <div class="container mx-auto px-4 py-8 md:px-6 lg:px-8">
    <div class="relative overflow-hidden">
      <div class="carousel-container">
        <div v-for="(image, index) in carouselImages" :key="index" v-show="activeSlide === index + 1" class="carousel-slide">
          <div
            class="carousel-image"
            :style="{ backgroundImage: `url(${image})` }"
          ></div>
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

export default {
  name: 'Carousel',
  data() {
    return {
      activeSlide: 1,
      carouselImages,
      timer: null, // Timer reference
    };
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
      this.activeSlide = this.activeSlide === 1 ? this.carouselImages.length : this.activeSlide - 1;
      this.startAutoScroll(); 
    },
    nextSlide() {
      this.activeSlide = this.activeSlide === this.carouselImages.length ? 1 : this.activeSlide + 1;
      this.startAutoScroll(); 
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
  color: #d5472c;
}

.carousel-container {
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 100%;
}

.carousel-slide {
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;
}

.carousel-image {
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  background-size: cover;
  background-position: center;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #d5472c;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

.nav-button-left {
  left: 10%;
}

.nav-button-right {
  right: 10%;
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
