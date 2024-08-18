<template>
    <div>
      <Navbar class="mb-8" />
      <main>
        <div id="albums" class="text-center mb-8 mobile-mb-4">
          <h2 id="gallery" class="mb-4 text-5xl font-extrabold text-white">
            Istaknuti <span :class="highlightClass">album</span>
          </h2>
        </div>
  
        <section class="section-container py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mb-16">
          <div class="lg:flex lg:gap-16">
            <div class="lg:w-1/3 flex justify-center">
              <img
                class="responsive-img w-full h-auto object-cover rounded-lg"
                :src="featuredAlbumData.image"
                :alt="featuredAlbumData.alt"
              />
            </div>
            <div class="lg:w-2/3 lg:pl-8 text-white">
              <h2 class="mb-4 text-4xl font-extrabold">Album</h2>
              <p class="mb-4 text-2xl font-extrabold" :class="highlightClass">{{ featuredAlbumData.title }}</p>
              <p class="mb-4 text-xl">{{ featuredAlbumData.description }}</p>
              <SpotifyEmbed :spotifyUrlProp="featuredAlbumData.spotifyUrl"/>
            </div>
          </div>
  

          
          <div class="lg:flex lg:gap-16 mt-16">
          <div class="lg:w-1/3">
            <h2 class="mb-4 text-4xl font-extrabold text-white">More Albums</h2>
            <div class="grid md:grid-cols-2 ">
              <div v-for="(album, key) in otherAlbums" :key="key" class="card" @click="selectAlbum(key)">
                <img class="responsive-img w-full h-auto object-cover rounded-lg" :src="album.image" :alt="album.alt">
                <div class="card-content">
                  <h3 class="font-bold text-white">{{ album.title }}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-2/3 lg:pl-8 text-white">
            <p class="text-lg text-white">{{ exploreText }}</p>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import SpotifyEmbed from '../components/SpotifyEmbed.vue';
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'AlbumInfo',
    components: {
      SpotifyEmbed,
      Navbar,
      Footer
    },
    props: {
      album: {
        type: String,
        required: true
      }
    },
    data() {
      const albumInfo = {
        loraHolliday: {
          image: 'https://i.imgur.com/zee13Cf.jpeg',
          alt: 'Lora Holliday Album Cover',
          title: 'PIRATI "Lora Holliday"',
          description: 'PIRATI “LORA HOLLIDAY, 1994. Izdanje PGP RTS - kaseta i LP',
          spotifyUrl: 'https://open.spotify.com/embed/album/7q0dHs3EZYLrydAKRktZ25'
        },
        loraHollidayLive: {
          image: 'https://i.imgur.com/cEXgqvb.jpeg',
          alt: 'Lora Holliday LIVE Album Cover',
          title: 'PIRATI "Lora Holliday" (First concert, Wine party - Kisač, 1988) LIVE',
          description: 'PIRATI "Lora Holliday", LIVE (1988), Vinski bal – Kisač, sopstveno elektronsko izdanje, 2024. godine',
          spotifyUrl: 'https://open.spotify.com/embed/album/0hxxD23r5fQbRGeyHa3QSE'
        }
      };
  
      const exploreTexts = {
        loraHolliday: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        loraHollidayLive: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      };
  
      return {
        albumInfo,
        exploreTexts,
        exploreText: exploreTexts[this.album] || exploreTexts.loraHolliday
      };
    },
    computed: {
      featuredAlbumData() {
        return this.albumInfo[this.album] || this.albumInfo.loraHolliday;
      },
      otherAlbums() {
        const currentAlbum = this.album;
        const otherAlbumKey = currentAlbum === 'loraHolliday' ? 'loraHollidayLive' : 'loraHolliday';
        return { [otherAlbumKey]: this.albumInfo[otherAlbumKey] };
      },
      highlightClass() {
        return this.album === 'loraHollidayLive' ? 'highlight-live' : 'highlight';
      }
    },
    watch: {
      album(newAlbum) {
        this.exploreText = this.getExploreText(newAlbum);
      }
    },
    methods: {
      getExploreText(albumType) {
        return this.exploreTexts[albumType] || this.exploreTexts.loraHolliday;
      },
      selectAlbum(albumType) {
        this.exploreText = this.getExploreText(albumType);
        this.redirectToAlbum(albumType);
      },
      redirectToAlbum(albumType) {
        const urls = {
          loraHolliday: '/album/loraHolliday',
          loraHollidayLive: '/album/loraHollidayLive'
        };
        const url = urls[albumType];
        if (url) {
          this.$router.push(url);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .h-screen {
    height: 10vh;
  }
  
  .highlight {
    font-weight: 700;
    color: var(--color-highlight);
  }
  
  .highlight-live {
    font-weight: 700;
    color: var(--color-highlight-live);
  }
  
  .section-container {
    @apply py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6;
    background: var(--color-background);
    background-size: 20px 20px;
    background-blend-mode: overlay;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    text-align: left;
  }
  
  .responsive-img {
    @apply rounded-lg;
  }
  
  .custom-gap {
    margin-bottom: 4rem;
  }
  
  .card {
    @apply cursor-pointer rounded-lg overflow-hidden;
    width: 100%;
  }
  
  .card-img {
    @apply w-full h-auto object-cover;
  }
  
  .card-content {
    @apply p-4;
  }
  
  @media (max-width: 640px) {
    .section-container {
      @apply p-4;
    }
  
    .highlight {
      font-size: 2rem;
    }
  
    .highlight-live {
      font-size: 2rem;
    }
  }
  </style>
  