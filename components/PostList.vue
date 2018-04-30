<template>
  <div class="posts">
    <slot/>
    <PostPreview
      v-for="(post, index) in $postQuery(filter)" 
      :post="post" 
      :full-width="fullWidth" 
      :key="index" 
    />
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
      type: String && Function,
      default: null
    },
    fullWidth: {
      required: false,
      default: false
    }
  },

  mounted() {
    this.fullWidth
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/config.styl';

.posts {
  display: grid;
  grid-gap: 1.4em;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: $MDlg) {
    grid-template-columns: 1fr;
  }
}
</style>
