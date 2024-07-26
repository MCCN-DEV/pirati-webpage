<template>
    <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Albums</a></li>
      <li><a href="#">Radio</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">About Us</a></li>
    </ul>
    <div class="hidden xl:flex items-center space-x-5 items-center">
        <a class="sob" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavLinks',
  };
  </script>
  
  <style scoped>
  a:hover {
    color: #d5472c; 
  }

  .sob:hover {
    color: #fe65aa;
  }
  </style>
  