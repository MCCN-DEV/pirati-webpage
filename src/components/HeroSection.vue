<template>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-3/5 p-6 bg-transparent border-2 border-white border-opacity-50 shadow-lg text-center text-white">
    <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wide mb-4">
      Pirati
    </h1>
    <p class="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aliquam cumque similique corrupti quas ut ipsam fugit, ipsum perferendis officiis illo hic, maiores repellat est, minima unde quidem laudantium doloremque?
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
export default {
  name: 'BackgroundWithArrow',
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
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
</style>