<template>
    <div>
      <section class="bg-[#0d1422]">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About <span class="font-extrabold highlight">Us</span></h2>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quo sit aliquid deserunt veniam officia dolorem ipsa cum aliquam corporis repudiandae aut quos eos mollitia, perspiciatis quam eveniet dolor expedita?</p>
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
        color: #d5472c;
    }
  </style>
  