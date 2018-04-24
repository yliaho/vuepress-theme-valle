<template>
  <div class="posts">
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

<style>
</style>
