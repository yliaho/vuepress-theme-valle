<template>
  <div 
    class="posts"
  >
    <PostPreview v-for="(post, index) in $postQuery(filter)" :post="post" :key="index" />
  </div>
</template>

<script>
import PostPreview from './PostPreview.vue'

export default {
  components: {
    PostPreview
  },

  props: {
    filter: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.posts {
  display: grid;
  grid-gap: 1.2em;
  grid-template-columns: 1fr 1fr 1fr;

  > * {
  }
}
</style>
