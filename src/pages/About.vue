<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div class="background-about"></div>
    <main class="px-4 py-8">
      <div class="content text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold about-title text-white">
          About <span class="font-extrabold highlight">Us</span>
        </h2>
        <div v-for="(paragraph, index) in paragraphs" :key="index" class="paragraph-container mb-8">
          <h4 class="subtitle about-subtitle">{{ subtitles[index]?.content }}</h4>
          <img v-if="index % 2 === 0" class="paragraph-img-right mt-4 mb-16 md:mt-0 paragraph-img rounded-lg" src="https://i.imgur.com/7o6gXKY.png" alt="Image" />
          <img v-if="index % 2 !== 0" class="paragraph-img-left mt-4 mb-8 md:mt-0 paragraph-img rounded-lg" src="https://i.imgur.com/7o6gXKY.png" alt="Image" />
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            {{ paragraph.content }}
            <a v-if="paragraph.content.length > 250" :href="'/paragraph/' + (index + 1)" >Pročitaj više...</a>
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ReadMore from '../components/ReadMore.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'About',
  components: {
    Navbar,
    Footer,
    ReadMore
  },
  data() {
    return {
      subtitles: [
        {content: `Piraterija i Piratstvo`},
        {content: `Prva Postava Grupe “PIRATI”`},
        {content: `Prvi Nastup Grupe`},
        {content: `Potpisivanje Ugovora`},
        {content: `Tiraž Rasprodat`}
      ],
      paragraphs: [
        { content: `Značenje pojma - Izrazi „piraterija ili piratstvo”, korišćeni su za neovlašćeno kopiranje, distribuciju i prodaju dela zaštićenih autorskim pravima. U vreme nastanka muzičke grupe “PIRATI” (VIS Pirati), uglavnom se to odnosilo na muzička ili filmska dela, softvere i sl., odnosno na oblast koju danas šire nazivamo “kreativne industrije”. Ova praksa sa kraja prošlog veka se vremenom značajno proširila u celom svetu.` },
        { content: `Prvu postavu grupe “PIRATI” su činili: Đorđe Jovanović – Žak (gitara), Dragan Nikolić – Gagi (vokal), Cikora Zoltan – Ciki (bubnjevi), Zoran Veselinović – Zoki (gitara), Darko Matić – Darež (bas gitara). Članovi prve postave grupe su ranije svirali u različitim drugim grupama - Đorđe Jovanović je svirao u grupama “ATAK NA BATAK” (pobedili na prvoj akustičarskoj gitarijadi u Sivcu sa njegovom pesmom), “NERON” (kasnije vinil izdanje) “PATAK I PEPERMINTI” (gitarijada Sivac), Dragan Nikolić je pevao u grupama “MAKARON” i “REVIJA”, Cikora Zoltan je svirao bubnjeve u brojnim novosadskim grupama, Zoran Veselinović je svirao gitaru u više novosadskih grupa, Darko Matić je svirao bas gitaru u više novosadskih grupa. Od početka rada grupe, svirala se isključivo autorska muzika Đorđa Jovanovića. Stilska muzička orijentacija grupe “PIRATI” je u osnovi bio pop rok zvuk – Bitlsi, Stounsi, itd.` },
        { content: `Prvi nastup grupe “PIRATI” je bio na “Danima vina” u Kisaču 1998. godine. Svirala je prva postava grupe. Sa ovog nastupa je 5 pesama skinuto sa VHS kasete i objavljeno kao "PIRATI Lora Holliday (First concert, Wine party - Kisač, 1988) LIVE". godine na muzičkim platformama.` },
        { content: `Đorđe Jovanović je u ime grupe “PIRATI” potpisao ugovor o ekskluzivnom snimanju originalnog muzičkog materijala grupe za Radio Novi Sad 1992. godine. Tokom leta i jeseni 1993. godine u studiju 1 RNS, snimljeno je ukupno dvanaest pesama. Snimatelj je bio Jan Šaš, producent i duvački instrumenti, Deže Molnar, deo aranžmana i klavijature uradio je Aleksandar Dujin, prateći vokali Tanja Jovićević, Januzović Aleksandar – Jana je odsvirao jedan deo gitara, Đorđe Jovanović je odsvirao jedan deo gitara, Rade Ćirić je odsvirao klasičnu gitaru u jednoj pesmi, Darko Matić i Dušan Ševarlić su svirali bas, itd. Sve pesme je otpevao pevač grupe Dragan Nikolić. Od dvanaest snimljenih, odabrano je deset autorskih pesama za budući album “Lora Holliday” koji je izdat za PGP RTS juna 1994. Snimanje je vršeno i za potrebe RTV i dečije emisije “Muzički tobogan”, pesma “Život nije kao balet” LINK.` },
        { content: `Tiraž je bio rasprodat – oko 5000 kaseta i LP ploča (uglavnom za radio stanice). ` }
      ],
    };
  },
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements() {
      gsap.fromTo(
        '.about-title',
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.about-title',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      gsap.utils.toArray('.about-subtitle').forEach((subtitle) => {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 50, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: subtitle,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.5,
            },
          }
        );
      });

      gsap.utils.toArray('.about-paragraph').forEach((paragraph) => {
        gsap.fromTo(
          paragraph,
          { opacity: 0, y: 50, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.5,
            },
          }
        );
      });

      gsap.utils.toArray('.paragraph-img').forEach((image) => {
        gsap.fromTo(
          image,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1.2,
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.5,
            },
          }
        );
      });
    },
  },
};
</script>

<style scoped>
a {
  color: var(--color-highlight);
  font-weight: 500;
}

a:hover {
  color: var(--color-highlight-hover);
}

.subtitle {
  text-align: center;
  margin: 1.5rem 0; 
  font-size: 1.25rem; 
  font-weight: bold;
}

.h-screen {
  height: 50vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  position: relative;
  padding: 2rem; 
  height: 100%; 
}

.highlight {
  color: var(--color-highlight); 
}

.centered-paragraph {
  text-align: left;
  font-size: 1.125rem; 
  max-width: 900px; 
  margin: 1rem 0; 
}

.paragraph-container {
  position: relative;
  transform: translateX(0);
  overflow: hidden;
}

.paragraph-img-right {
  float: right; 
  margin: 0 0 5% 5%; 
  width: 300px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  transform: translateY(20px);
}

.paragraph-img-left {
  float: left; 
  margin: 0 5% 5% 0; 
  width: 300px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  transform: translateY(20px);
}

.paragraph-container p {
  flex: 1; 
}

.paragraph-container img.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 767px) {
  .paragraph-img-right, .paragraph-img-left {
    width: 100%; 
    margin: 1rem 0 2rem 0;
    float: none;
  }
}
</style>
