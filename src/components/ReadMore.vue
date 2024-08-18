<template>
    <div class="read-more-container">
      <router-link :to="href" class="read-more-button">Read More</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReadMore',
    props: {
      href: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .read-more-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    width: 100%;
  }
  
  .read-more-button {
    padding: 0.5rem 1rem;
    background-color: var(--color-highlight);
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
  }
  
  .read-more-button:hover {
    background-color: var(--color-highlight-hover);
  }
  </style>
  