<template>
      <div class="container">
        <div class="content">
          <h1 class="bandname">Pirati</h1>
          <p class="description">
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
  