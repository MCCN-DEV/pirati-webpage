<template>
  <div>
    <div id="albums" class="text-center mb-8 mobile-mb-4">
      <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 text-white">
        Alb<span class="font-extrabold highlight">umi</span>
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
            Album
          </h2>
          <p class="mb-4 font-extrabold highlight" style="font-size: 36px;">PIRATI "Lora Holliday"</p>
          <p class="mb-4" style="font-size: 24px; color: white;">
            PIRATI “LORA HOLLIDAY, 1994. Izdanje PGP RTS - kaseta i LP
          </p>
          <SpotifyEmbed spotifyUrlProp="https://open.spotify.com/embed/album/7q0dHs3EZYLrydAKRktZ25"/>
        </div>
      </div>
    </section>

    <section class="section-container mobile-mt-4">
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
            Album
          </h2>
          <p class="mb-4 font-extrabold highlight-live" style="font-size: 36px; line-height: 36px;">PIRATI "Lora Holliday" (First concert, Wine party - Kisač, 1988) LIVE</p>
          <p class="mb-4" style="font-size: 24px; color: white;">
            PIRATI "Lora Holliday", LIVE (1988), Vinski bal – Kisač, sopstveno elektronsko izdanje, 2024. godine
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

p.highlight, p.highlight-live {
  margin-top: 0; 
  margin-bottom: 1rem; 
  font-size: 1.5rem; 
}

img {
  aspect-ratio: 1 / 1;
}

@media (max-width: 640px) {
  .section-container {
    transform: scale(0.9);
  }
  .responsive-img {
    transform: scale(0.9); 
  }
  .mobile-mb-4 {
    margin-bottom: -5rem;
  }
  .mobile-mt-4 {
    margin-top: -5rem;
  }

}

</style>
