<template>
  <div class="overflow-hidden rounded-lg shadow-lg">
    <img
      :src="imageSrc"
      alt=""
      class="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      @click="handleClick"
    />
  </div>
</template>
  
<script>
export default {
  name: 'GalleryImage',
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('open-popup', this.imageSrc);
    }
  }
};
</script>

<style scoped>
</style>
  