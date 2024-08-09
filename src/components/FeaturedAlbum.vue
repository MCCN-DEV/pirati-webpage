<template>
  <div>
    <div id="albums" class="text-center mb-8">
      <h2 id="gallery" class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 text-white">
        Alb<span class="font-extrabold highlight">ums</span>
      </h2>
    </div>
    
    <section class="section-container">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 section-animate">
        <div class="lg:col-span-1 flex items-center">
          <img
            class="responsive-img w-full h-auto object-cover rounded-lg"
            src="https://i.imgur.com/zee13Cf.jpeg"
            alt="office content"
            style="aspect-ratio: 1 / 1;"
          />
        </div>
        <div class="lg:col-span-1 font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-white">
            Featured Album <span class="font-extrabold highlight">"Lora Holliday"</span>
          </h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus harum modi vero optio obcaecati similique
            molestiae doloremque ullam sapiente tempora dolores, corporis quas minus itaque culpa alias odit quo veniam ut
            neque id quis. Doloribus saepe, labore voluptatem pariatur quisquam dolorem provident nisi rem reprehenderit
            voluptate iure dicta doloremque.
          </p>
          <SpotifyEmbed spotifyUrlProp="https://open.spotify.com/embed/album/7q0dHs3EZYLrydAKRktZ25"/>
        </div>
      </div>
    </section>
    <section class="section-container">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 section-animate">
        <div class="lg:col-span-1 flex items-center">
          <img
            class="responsive-img w-full h-auto object-cover rounded-lg"
            src="https://i.imgur.com/cEXgqvb.jpeg"
            alt="office content"
            style="aspect-ratio: 1 / 1;"
          />
        </div>
        <div class="lg:col-span-1 font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-white">
            Featured Album <span class="font-extrabold highlight-live">"PIRATI Lora Holliday (First concert, Wine party, Kisač) LIVE"</span>
          </h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus harum modi vero optio obcaecati similique
            molestiae doloremque ullam sapiente tempora dolores, corporis quas minus itaque culpa alias odit quo veniam ut
            neque id quis. Doloribus saepe, labore voluptatem pariatur quisquam dolorem provident nisi rem reprehenderit
            voluptate iure dicta doloremque.
          </p>
          <SpotifyEmbed spotifyUrlProp="https://open.spotify.com/embed/album/0hxxD23r5fQbRGeyHa3QSE"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpotifyEmbed from './SpotifyEmbed.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'FeaturedAlbum',
  components: {
    SpotifyEmbed,
  },
  mounted() {
    gsap.utils.toArray('.section-animate').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );
    });
  },
};
</script>

<style scoped>
.highlight {
  color: var(--color-highlight);
}

.highlight-live {
  color: var(--color-highlight-live);
}

img {
  aspect-ratio: 1 / 1;
}

.section-container {
  transition: transform 0.3s ease;
}

@media (max-width: 640px) {
  .section-container {
    transform: scale(0.9);
  }
  .responsive-img {
    transform: scale(0.9); 
  }
}

</style>
