<template>
    <div class="relative h-screen">
      <section class="relative mx-auto">
        <nav class="flex justify-between text-white w-screen">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <a class="text-3xl font-bold font-heading" href="#">
              Pirati
            </a>
            <NavLinks/>
          </div>
        </nav>
      </section>
    </div>
  </template>
  
  <script>
  import NavLinks from './NavbarLinks.vue';
  export default {
    name: 'Navbar',
    components: {
        NavLinks,
    }
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #0d1422; 
  }
  
  nav a {
    color: #ffffff; 
  }
  
  nav a:hover {
    color: #d5472c; 
  }
  
  header svg {
    stroke: #ffffff; 
  }
  </style>
  