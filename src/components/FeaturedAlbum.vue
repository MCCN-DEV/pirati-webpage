<template>
    <div>
      <section class="bg-[#0d1422]">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="lg:col-span-1 flex items-center">
          <img class="w-full object-cover rounded-lg" src="https://i.imgur.com/zee13Cf.jpeg" alt="office content">
        </div>
        <div class="lg:col-span-1 font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Featured Album <span class="font-extrabold highlight">"Lora Holliday"</span>
          </h2>
          <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus harum modi vero optio obcaecati similique molestiae doloremque ullam sapiente tempora dolores, corporis quas minus itaque culpa alias odit quo veniam ut neque id quis. Doloribus saepe, labore voluptatem pariatur quisquam dolorem provident nisi rem reprehenderit voluptate iure dicta doloremque.</p>
          <SpotifyEmbed/>
        </div>
      </div>
    </section>
    </div>
  </template>
  

  <script>
  import SpotifyEmbed from './SpotifyEmbed.vue';

  export default {
    name: 'FeaturedAlbum',
    components: {
      SpotifyEmbed,
    }
  }
  </script>
  <style scoped>
    .highlight {
        color: #d5472c;
    }
  </style>
  