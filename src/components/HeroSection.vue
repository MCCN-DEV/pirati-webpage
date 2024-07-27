<template>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-3/5 p-4 bg-transparent border border-white text-center text-white">
    <div class="w-full">
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-4">
        Pirati
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aliquam cumque similique corrupti quas ut ipsam fugit, ipsum perferendis officiis illo hic, maiores repellat est, minima unde quidem laudantium doloremque?
      </p>
    </div>
  </div>
</template>
  
  <style scoped>
 
  
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 60%; 
    height: auto;
    padding: 1rem;
    box-sizing: border-box;
    text-align: center;
    color: var(--color-heading); 
    background: transparent; 
    border: 1px solid #fff;
  }
  
  .bandname {
    font-size: 9rem; 
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .description {
    font-size: 1.25rem; 
    margin-top: 1rem; 
  }

  </style>
  