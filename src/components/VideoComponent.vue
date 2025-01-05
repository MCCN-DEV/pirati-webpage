<template>
  <div class="flex flex-col justify-center items-center">
    <p class="min-h-[70px] flex justify-center items-center text-center text-lg md:text-xl lg:text-2xl font-bold">{{ title }}</p>
    <iframe width="560" height="315" :src="videoUrl" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'YoutubeVideo',
  props: {
    videoUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>