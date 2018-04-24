<template>
  <div class="post">
    <div class="post-wrapper">
      <h1 class="post-title">
        <a :href="post.path">{{post.title}}</a>
      </h1>
      <span class="post-date">{{postDate}}</span>
      <div v-if="post.preview.rendered" v-html="post.preview.rendered" class="post-content preview rendered" />
      <div v-else class="post-content preview">
        {{post.preview.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      required: true
    }
  },

  computed: {
    postDate() {
      const {
        frontmatter: { date }
      } = this.post
      return new Date(date).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/post.styl';
</style>
