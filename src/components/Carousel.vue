<template>
  <div class="relative overflow-hidden">
    <div class="carousel-container">
      <div v-show="activeSlide === 1" class="carousel-slide">
        <div
          class="carousel-image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/7o6gXKY.png)' }"
        ></div>
      </div>

      <div v-show="activeSlide === 2" class="carousel-slide">
        <div
          class="carousel-image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/g7HiNOC.png)' }"
        ></div>
      </div>

      <div v-show="activeSlide === 3" class="carousel-slide">
        <div
          class="carousel-image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/6pzkvIp.png)' }"
        ></div>
      </div>

      <div v-show="activeSlide === 4" class="carousel-slide">
        <div
          class="carousel-image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/7DLTIRr.png)' }"
        ></div>
      </div>

      <div v-show="activeSlide === 5" class="carousel-slide">
        <div
          class="carousel-image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/fqFVfaj.png)' }"
        ></div>
      </div>

      <div v-show="activeSlide === 6" class="carousel-slide">
        <div
          class="carousel-image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/ppCQohw.png)' }"
        ></div>
      </div>

     
    </div>

    <button @click="prevSlide" class="nav-button nav-button-left">
      &lt;
    </button>
    <button @click="nextSlide" class="nav-button nav-button-right">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      activeSlide: 1,
    };
  },
  methods: {
    prevSlide() {
      this.activeSlide = this.activeSlide === 1 ? 6 : this.activeSlide - 1;
    },
    nextSlide() {
      this.activeSlide = this.activeSlide === 6 ? 1 : this.activeSlide + 1;
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
  width: 100%;
}

.carousel-container {
  background-color: #0d1422;
  display: flex;
  justify-content: center;
  width: 100%;
}

.carousel-slide {
  width: 60vw; 
  margin: 0 10vw; 
}

.carousel-image {
  width: 100%;
  height: 60vh; 
  background-size: cover;
  background-position: center;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #0d1422; 
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

.nav-button:hover {
  background-color: #d5472c;
}
.nav-button-left {
  left: 22%; 
}

.nav-button-right {
  right: 22%; 
}
</style>
