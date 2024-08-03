<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div class="background-about"></div>
    <main class="px-4 py-8">
      <div class="content text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold dark:text-white about-title">
          About <span class="font-extrabold highlight">Us</span>
        </h2>
        <div class="paragraph-container flex flex-col md:flex-row md:items-start mb-8">
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph1" :key="index">{{ char }}</span>
          </p>
          <img class="paragraph-img mt-4 mb-16 md:mt-0 md:ml-4" src="https://i.imgur.com/7o6gXKY.png" alt="Description for image 1" />
        </div>
        <h4 class="mb-4 subtitle about-subtitle">Our Members</h4>
        <div class="paragraph-container flex flex-col-reverse md:flex-row md:items-start mb-8">
          <img class="paragraph-img mt-4 mb-8 md:mt-0 md:mr-4" src="https://i.imgur.com/7o6gXKY.png" alt="Description for image 2" />
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph2" :key="index">{{ char }}</span>
          </p>
        </div>
        <h4 class="mb-4 subtitle about-subtitle">Our Albums</h4>
        <div class="paragraph-container flex flex-col md:flex-row md:items-start mb-8">
          <p class="mb-4 centered-paragraph about-paragraph letter-animation flex-1">
            <span v-for="(char, index) in paragraph3" :key="index">{{ char }}</span>
          </p>
          <img class="paragraph-img mt-4 md:mt-0 md:ml-4" src="https://i.imgur.com/7o6gXKY.png" alt="Description for image 3" />
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
      paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores mollitia molestiae autem nulla recusandae, modi distinctio inventore ut sint. Ipsum quos amet voluptatum maiores impedit pariatur exercitationem! Nesciunt officiis perspiciatis est placeat dolor natus aperiam pariatur, voluptas voluptates consectetur, qui praesentium incidunt architecto iure maxime doloremque obcaecati, repellat ipsa fugiat reiciendis fugit repudiandae necessitatibus autem. Fuga, voluptatum consequatur nulla voluptate totam sunt nihil cupiditate officia illo odit eos quo omnis veniam veritatis quos excepturi recusandae eum.'.split(''),
      paragraph2: 'Itaque illo beatae harum eaque culpa praesentium esse recusandae ipsam qui corporis officia, obcaecati impedit dolore omnis dolor dolorum quod eveniet sed voluptatem cum laboriosam vero eum explicabo minus? Neque itaque nihil, laudantium optio quae corrupti quisquam incidunt quasi quas. Ratione quae maiores commodi suscipit aspernatur laudantium, nostrum placeat, voluptates sed obcaecati autem vitae magnam adipisci soluta voluptatibus assumenda minus error quaerat, iste deleniti. Corporis odio delectus assumenda in cupiditate?'.split(''),
      paragraph3: 'Optio numquam earum nostrum eos delectus, animi dicta illo dolore tempore corporis, officiis aut architecto debitis esse sint modi sit odit. Ipsum ea minima provident. Omnis sapiente porro unde, dolor natus velit inventore reprehenderit dolorem iusto ullam libero, totam, perferendis quidem deserunt nulla nisi id. Molestias maiores eveniet asperiores eos ipsa commodi minima?'.split(''),
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
  max-width: 700px; 
  margin: 1rem 0; 
}

.paragraph-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  transform: translateX(0);
}

.paragraph-container img {
  margin-left: 1rem; 
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

@media (min-width: 768px) {
  .paragraph-container {
    flex-direction: row;
  }
}

@media (max-width: 767px) {
  .paragraph-container {
    flex-direction: column;
  }
  .paragraph-container img {
    width: 100%; 
    margin-top: 1rem; 
    margin-left: 0; 
  }
}
</style>
