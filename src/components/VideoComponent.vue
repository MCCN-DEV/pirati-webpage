<template>
  <div>
    {{ title }}
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