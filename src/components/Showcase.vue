<template>
    <div>
      <section>
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">About <span class="font-extrabold highlight">Us</span></h2>
            <p class="mb-4" style="font-size: 24px; color: white;">
              Kao autor muzike i teksta pesama grupe "PIRATI",  po formalnom prestanku rada grupe, Đorđe Jovanović nastavlja sa autorskim radom do danas. 
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://i.imgur.com/ZSSuofs.png" alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.imgur.com/6U2dh8B.png" alt="office content 2">
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeaturedAlbum',
    components: {
    }
  }
  </script>
  <style scoped>
    .highlight {
        color: var(--color-highlight);
    }
  </style>
  