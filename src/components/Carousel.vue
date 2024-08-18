<template>
  <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
    <div class="text-center mb-8">
      <h2 id="gallery" class="mb-4 text-5xl tracking-tight font-extrabold text-white">
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
  <div class="container mx-auto px-4 py-8 md:px-6 lg:px-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <GalleryImage
        v-for="(image, index) in displayedGridImages"
        :key="index"
        :imageSrc="image"
        @open-popup="openPopup"
      />
    </div>
  </div>

  <div v-if="isPopupOpen" class="popup-overlay" @click="closePopup">
    <div class="popup-content" @click.stop>
      <img :src="selectedImage" alt="" class="popup-image">
      <button class="popup-close" @click="closePopup">
        <svg class="popup-close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { carouselImages } from '../data/constants';
import { gridImages } from '../data/gridImages';
import { gsap } from 'gsap';
import GalleryImage from './GalleryImage.vue';

export default {
  name: 'Carousel',
  components: {
    GalleryImage
  },
  data() {
    return {
      activeSlide: 1,
      carouselImages,
      gridImages,
      timer: null,
      isMobile: window.innerWidth < 640,
      isPopupOpen: false,
      selectedImage: '',
    };
  },
  computed: {
    displayedGridImages() {
      return this.isMobile ? this.gridImages.slice(0, 3) : this.gridImages.slice(0, 6);
    }
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 640;
    },
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
    openPopup(image) {
      this.selectedImage = image;
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
      this.selectedImage = '';
    }
  },
  created() {
    this.startAutoScroll();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    window.removeEventListener('resize', this.handleResize);
  }
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
  background-size: contain;
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

@media (max-width: 640px) {
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

  .carousel-slide {
    max-width: 100%;
  }
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  position: relative;
  max-width: 90%;
  max-height: 80%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.popup-image {
  width: 100%;
  height: auto;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.popup-close:hover {
  transform: scale(1.1);
}

.popup-close-icon {
  width: 24px;
  height: 24px;
  stroke: var(--color-highlight);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
