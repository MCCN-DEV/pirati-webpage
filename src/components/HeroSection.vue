<template>
  <div class="hero-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-3/5 p-6 bg-transparent border-2 border-white border-opacity-50 shadow-lg text-center text-white">
    <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wide mb-4 pirati-title">
      <span v-for="(char, index) in 'Pirati'" :key="index" class="char">{{ char }}</span>
    </h1>
    <p class="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed paragraph-text">
      <p style="font-size: 40px;">JEDINI PIRATI KOJI SU ORIGINAL!</p>
      <br/>
      <i style="margin-top: 8px;">
        Slušanje muzike grupe “PIRATI” može pozitivno uticati na zdravlje ljudi i životnu sredinu.
      </i>
    </p>
  </div>
  <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2">
    <button @click="scrollToSection('albums')" class="down-arrow-button">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';

export default {
  name: 'BackgroundWithArrow',
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    updateHighlight(event) {
      const chars = document.querySelectorAll('.pirati-title .char');
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;

      chars.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const charWidth = charRect.width;
        const charLeft = charRect.left - rect.left;
        const charRight = charLeft + charWidth;

        if (x >= charLeft && x <= charRight) {
          gsap.to(char, {
            color: 'var(--color-highlight)', 
            duration: 0.3,
            ease: 'power2.out',
          });
        } else {
          gsap.to(char, {
            color: '#ffffff', 
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    },
  },
  mounted() {
    gsap.fromTo(
      '.hero-container',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.out',
        delay: 1.5,
      }
    );

    gsap.fromTo(
      '.down-arrow-button svg',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
        delay: 1.5, 
      }
    );
    
    gsap.fromTo(
      '.down-arrow-button svg',
      { rotate: -3 }, 
      { 
        rotate: 3, 
        repeat: -1, 
        yoyo: true, 
        duration: 0.3, 
        ease: 'power1.inOut'
      }
    );
    const piratiTitle = document.querySelector('.pirati-title');
    if (piratiTitle) {
      piratiTitle.addEventListener('mousemove', this.updateHighlight);
      piratiTitle.addEventListener('mouseleave', () => {
        gsap.to('.pirati-title .char', {
          color: '#ffffff', 
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    }
  },
};
</script>

<style scoped>
.hero-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pirati-title {
  cursor: pointer;
  user-select: none;
  text-align: center;
  display: flex;
  justify-content: center;
}

.char {
  display: inline-block;
  font-size: inherit;
  font-weight: 700;
  transition: color 0.3s ease;
}

.down-arrow-button {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease;
  color: white;
}

.down-arrow-button:hover {
  transform: scale(1.1);
}

.down-arrow-button svg {
  width: 3rem;
  height: 3rem;
}

.paragraph-text {
  opacity: 1;
}
</style>
