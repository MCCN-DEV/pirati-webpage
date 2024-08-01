<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div class="background-about"></div>
    <main>
      <div class="content text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold dark:text-white">
          About <span class="font-extrabold highlight">Us</span>
        </h2>
        <p class="mb-4 centered-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores mollitia molestiae autem nulla recusandae, modi distinctio inventore ut sint. Ipsum quos amet voluptatum maiores impedit pariatur exercitationem! Nesciunt officiis perspiciatis est placeat dolor natus aperiam pariatur, voluptas voluptates consectetur, qui praesentium incidunt architecto iure maxime doloremque obcaecati, repellat ipsa fugiat reiciendis fugit repudiandae necessitatibus autem. Fuga, voluptatum consequatur nulla voluptate totam sunt nihil cupiditate officia illo odit eos quo omnis veniam veritatis quos excepturi recusandae eum.
        </p>
        <h4 class="mb-4 subtitle">Our Members</h4>
        <p class="mb-4 centered-paragraph">
          Itaque illo beatae harum eaque culpa praesentium esse recusandae ipsam qui corporis officia, obcaecati impedit dolore omnis dolor dolorum quod eveniet sed voluptatem cum laboriosam vero eum explicabo minus? Neque itaque nihil, laudantium optio quae corrupti quisquam incidunt quasi quas. Ratione quae maiores commodi suscipit aspernatur laudantium, nostrum placeat, voluptates sed obcaecati autem vitae magnam adipisci soluta voluptatibus assumenda minus error quaerat, iste deleniti. Corporis odio delectus assumenda in cupiditate?
        </p>
        <h4 class="mb-4 subtitle">Our Albums</h4>
        <p class="mb-4 centered-paragraph">
          Optio numquam earum nostrum eos delectus, animi dicta illo dolore tempore corporis, officiis aut architecto debitis esse sint modi sit odit. Ipsum ea minima provident. Omnis sapiente porro unde, dolor natus velit inventore reprehenderit dolorem iusto ullam libero, totam, perferendis quidem deserunt nulla nisi id. Molestias maiores eveniet asperiores eos ipsa commodi minima?
        </p>
      </div>
    </main>
    <Footer/>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'AboutUs',
  components: {
    Navbar,
    Footer
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
</style>
