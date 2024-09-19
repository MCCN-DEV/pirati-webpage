<template>
  <div class="paragraph-page">
    <header>
      <Navbar />
    </header>
    <main class="content-container" >
      <div class="hero-container landscape__margin-main">
        <h1 class="page-title">
          {{ pageTitle }}
        </h1>
        <img v-if="pageImage" :src="pageImage" alt="Paragraph Image" class="paragraph-image" />
        <p class="paragraph-text">
          {{ paragraphContent }}
        </p>
      </div>
    </main>
    <Footer />
  </div>
</template>
  
  
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';
import TirazRasprodatImage from '@/assets/img/TirazRasprodat_MainPic.jpg';

export default {
  name: 'ParagraphPage',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      pageTitle: '',
      paragraphContent: '',
      pageImage: ''
    };
  },
  mounted() {
    this.loadParagraphContent();
    this.animateContent();
  },
  methods: {
    loadParagraphContent() {
      const paragraphId = this.$route.params.id;
      const paragraphs = {
        1: {
          title: 'Piraterija i Piratstvo',
          content: `Značenje pojma - Izrazi „piraterija ili piratstvo”, korišćeni su za neovlašćeno kopiranje, distribuciju i prodaju dela zaštićenih autorskim pravima. U vreme nastanka muzičke grupe “PIRATI” (VIS Pirati), uglavnom se to odnosilo na muzička ili filmska dela, softvere i sl., odnosno na oblast koju danas šire nazivamo “kreativne industrije”. Ova praksa sa kraja prošlog veka se vremenom značajno proširila u celom svetu. Pojava, da se kršenje ekskluzivnih prava na kreativnim delima, označava kao „piratstvo”, prethodila je zakonima o autorskim pravima, koji su kasnije ovo pokušali da precizno urede u pravnom kontekstu.
          `,
          image: 'https://i.imgur.com/7o6gXKY.png'
        },
        2: {
          title: 'Prva Postava Grupe “PIRATI”',
          content: `Prvu postavu grupe “PIRATI” (1988. godina) su činili: Đorđe Jovanović – Žak (gitara), Dragan Nikolić – Gagi (vokal), Cikora Zoltan – Ciki (bubnjevi), Zoran Veselinović – Zoki (gitara), Darko Matić – Darež (bas gitara). Članovi prve postave grupe su ranije svirali u različitim drugim grupama - Đorđe Jovanović je svirao u grupama “ATAK NA BATAK” (pobedili na prvoj akustičarskoj gitarijadi u Sivcu sa njegovom pesmom), “NERON” (kasnije vinil izdanje) “PATAK I PEPERMINTI” (gitarijada Sivac), Dragan Nikolić je pevao u grupama “MAKARON” i “REVIJA”, Cikora Zoltan je svirao bubnjeve u brojnim novosadskim grupama, Zoran Veselinović je svirao gitaru u više novosadskih grupa, Darko Matić je svirao bas gitaru u više novosadskih grupa. Od početka rada grupe, svirala se isključivo autorska muzika Đorđa Jovanovića. Stilska muzička orijentacija grupe “PIRATI” je u osnovi bio pop rok zvuk – Bitlsi, Stounsi, itd.`,
          image: 'https://i.imgur.com/7o6gXKY.png'
        },
        3: {
          title: 'Prvi Nastup Grupe',
          content: `Prvi nastup grupe “PIRATI” je bio na “Danima vina” u Kisaču 1998. godine. Svirala je prva postava grupe. Sa ovog nastupa je 5 pesama skinuto sa VHS kasete i objavljeno kao "PIRATI Lora Holliday (First concert, Wine party - Kisač, 1988) LIVE", kao sopstveno izdanje na muzičkim platformama.`,
          image: 'https://i.imgur.com/7o6gXKY.png'
        },
        4: {
          title: 'Potpisivanje Ugovora',
          content: `Đorđe Jovanović je u ime grupe “PIRATI” potpisao ugovor o ekskluzivnom snimanju originalnog muzičkog materijala grupe za Radio Novi Sad 1992. godine. Tokom leta i jeseni 1993. godine u studiju 1 RNS, snimljeno je ukupno dvanaest pesama. Snimatelj je bio Jan Šaš, producent i duvački instrumenti, Deže Molnar, deo aranžmana i klavijature uradio je Aleksandar Dujin, prateći vokali Tanja Jovićević, Januzović Aleksandar – Jana je odsvirao jedan deo gitara, Đorđe Jovanović je odsvirao jedan deo gitara, Rade Ćirić je odsvirao klasičnu gitaru u jednoj pesmi, Darko Matić i Dušan Ševarlić su svirali bas, itd. Sve pesme je otpevao pevač grupe Dragan Nikolić. Od dvanaest snimljenih, odabrano je deset autorskih pesama za budući album “Lora Holliday” koji je izdat za PGP RTS juna 1994. Snimanje je vršeno i za potrebe RTV i dečije emisije “Muzički tobogan”, pesma “Život nije kao balet” LINK.`,
          image: 'https://i.imgur.com/7o6gXKY.png'
        },
        5: {
          title: 'Tiraž Rasprodat',
          content: `Album “Lora Holliday” grupe “PIRATI” je izdat za PGP RTS juna 1994. godine. Tiraž je bio rasprodat - oko 5000 kaseta i LP ploča (uglavnom za radio stanice).`,
          image: TirazRasprodatImage,
        }
      };

      const data = paragraphs[paragraphId] || { title: 'Content not found.', content: 'Content not found.', image: '' };
      this.pageTitle = data.title;
      this.paragraphContent = data.content;
      this.pageImage = data.image;
    },
    animateContent() {
      gsap.fromTo(
        '.hero-container',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out'
        }
      );

      gsap.fromTo(
        '.paragraph-image',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out'
        }
      );

      gsap.fromTo(
        '.paragraph-text',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out',
          delay: 0.5
        }
      );
    }
  }
};
</script>

<style scoped>

.h-screen {
  height: 10vh;
}

.paragraph-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  flex: 1; 
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto; 
}

.hero-container {
    background: var(--color-background);
    background-size: 20px 20px;
    background-blend-mode: overlay;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-highlight);
  margin-bottom: 1rem;
}

.paragraph-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  margin: 1rem 0;
  border-radius: 8px;
}

.paragraph-text {
  color: #ccc;
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

</style>
