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
        <div class="paragraph-container mb-8">
          <img class="paragraph-img-right mt-4 mb-16 md:mt-0 paragraph-img rounded-lg" src="https://i.imgur.com/7o6gXKY.png" alt="Image" />
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph1" :key="index">{{ char }}</span>
          </p>
        </div>
        <h4 class="mb-4 subtitle about-subtitle">Our Members</h4>
        <div class="paragraph-container mb-8">
          <img class="paragraph-img-left mt-4 mb-8 md:mt-0 paragraph-img rounded-lg" src="https://i.imgur.com/7o6gXKY.png" alt="Image" />
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph2" :key="index">{{ char }}</span>
          </p>
        </div>
        <h4 class="mb-4 subtitle about-subtitle">Prvi Nastup</h4>
        <div class="paragraph-container mb-8">
          <img class="paragraph-img-right mt-4 md:mt-0 paragraph-img rounded-lg" src="https://i.imgur.com/7o6gXKY.png" alt="Image" />
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph4" :key="index">{{ char }}</span>
          </p>
        </div>
        <h4 class="mb-4 subtitle about-subtitle">Studijska Snimanja</h4>
        <div class="paragraph-container mb-8">
          <img class="paragraph-img-left mt-4 mb-8 md:mt-0 paragraph-img rounded-lg" src="https://i.imgur.com/7o6gXKY.png" alt="Image" />
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph5" :key="index">{{ char }}</span>
            <br/>
            <br/>
            <a href="https://www.youtube.com/watch?v=yb5OkBXbbIc">LINK</a>
          </p>
        </div>
        <h4 class="mb-4 subtitle about-subtitle">Our Albums</h4>
        <div class="paragraph-container mb-8">
          <img class="paragraph-img-right mt-4 md:mt-0 paragraph-img rounded-lg" src="https://i.imgur.com/7o6gXKY.png" alt="Image" />
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph6" :key="index">{{ char }}</span>
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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutUs',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      paragraph1: `Značenje pojma - Izrazi „piraterija ili piratstvo”, korišćeni su za neovlašćeno kopiranje, distribuciju i prodaju dela zaštićenih autorskim pravima.
U vreme nastanka muzičke grupe “PIRATI” (VIS Pirati), uglavnom se to odnosilo na muzička ili filmska dela, softvere i sl., odnosno na oblast koju danas šire nazivamo “kreativne industrije”. Ova praksa sa kraja prošlog veka se vremenom značajno proširila u celom svetu.
Pojava, da se kršenje ekskluzivnih prava na kreativnim delima, označava kao „piratstvo”, prethodila je zakonima o autorskim pravima, koji su kasnije ovo pokušali da precizno urede u pravnom kontekstu.
Grupu “PIRATI” (kasnije VIS Pirati) osnovao je u Novom Sadu Đorđe Jovanović na proleće 1988. godine.
Grupa je bila aktivna od 1988. do 1995. godine.
`.split(''),
      paragraph2: `
Prvu postavu grupe “PIRATI” su činili:
Đorđe Jovanović – Žak (gitara), Dragan Nikolić – Gagi (vokal), Cikora Zoltan – Ciki (bubnjevi), Zoran Veselinović – Zoki (gitara), Darko Matić – Darež (bas gitara).
Članovi prve postave grupe su ranije svirali u različitim drugim grupama - Đorđe Jovanović je svirao u grupama “ATAK NA BATAK” (pobedili na prvoj akustičarskoj gitarijadi u Sivcu sa njegovom pesmom), “NERON” (kasnije vinil izdanje) “PATAK I PEPERMINTI” (gitarijada Sivac),
Dragan Nikolić je pevao u grupama “MAKARON” i “REVIJA”,
Cikora Zoltan je svirao bubnjeve u brojnim novosadskim grupama,
Zoran Veselinović je svirao gitaru u više novosadskih grupa,
Darko Matić je svirao bas gitaru u više novosadskih grupa.
Od početka rada grupe, svirala se isključivo autorska muzika Đorđa Jovanovića.
Stilska muzička orijentacija grupe “PIRATI” je u osnovi bio pop rok zvuk – Bitlsi, Stounsi, itd.
`.split(''),
      paragraph3: 'Optio numquam earum nostrum eos delectus, animi dicta illo dolore tempore corporis, officiis aut architecto debitis esse sint modi sit odit. Ipsum ea minima provident. Omnis sapiente porro unde, dolor natus velit inventore reprehenderit dolorem iusto ullam libero, totam, perferendis quidem deserunt nulla nisi id. Molestias maiores eveniet asperiores eos ipsa commodi minima?'.split(''),
      paragraph4: `Prvi nastup grupe “PIRATI” je bio na “Danima vina” u Kisaču 1998. godine. Svirala je prva postava grupe.
Sa ovog nastupa je 5 pesama skinuto sa VHS kasete i objavljeno kao "PIRATI Lora Holliday (First concert, Wine party - Kisač, 1988) LIVE". godine na muzičkim platformama.
`.split(''),
      paragraph5: `Đorđe Jovanović je u ime grupe “PIRATI” potpisao ugovor o ekskluzivnom snimanju originalnog muzičkog materijala grupe za Radio Novi Sad 1992. godine. Tokom leta i jeseni 1993. godine u studiju 1 RNS, snimljeno je ukupno dvanaest pesama. Snimatelj je bio Jan Šaš, producent i duvački instrumenti, Deže Molnar, deo aranžmana i klavijature uradio je Aleksandar Dujin, prateći vokali Tanja Jovićević, Januzović Aleksandar – Jana je odsvirao jedan deo gitara, Đorđe Jovanović je odsvirao jedan deo gitara, Rade Ćirić je odsvirao klasičnu gitaru u jednoj pesmi, Darko Matić i Dušan Ševarlić su svirali bas, itd. 
      Sve pesme je otpevao pevač grupe Dragan Nikolić.
Od dvanaest snimljenih, odabrano je deset autorskih pesama za budući album “Lora Holliday” koji je izdat za PGP RTS juna 1994. Snimanje je vršeno i za potrebe RTV i dečije emisije “Muzički tobogan”, pesma “Život nije kao balet” LINK. 
`.split(''),
      paragraph6:
      `Tiraž je bio rasprodat – oko 5000 kaseta i LP ploča (uglavnom za radio stanice).`,
    };
  },
  mounted() {
    const paragraphs = document.querySelectorAll('.about-paragraph');
    paragraphs.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        {
          opacity: 0,
          x: index === 1 ? -100 : (index === 2 ? 100 : 0),
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          x: 0,
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

    const images = document.querySelectorAll('.paragraph-img');
    images.forEach(image => {
      gsap.fromTo(
        image,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: image.previousElementSibling,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );
    });

    gsap.fromTo(
      '.about-title',
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
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

    gsap.fromTo(
      '.about-subtitle',
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.about-subtitle',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5,
        },
      }
    );
  },
};
</script>

<style scoped>
.subtitle {
  text-align: left;
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
  text-align: center;
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
