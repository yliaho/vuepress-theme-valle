<template>
  <div class="post" :style="`grid-column-end: ${fullWidth ? 'span 3' : 'initial'}`">
    <div class="post-wrapper">
      <h1 class="post-title">
        <a :href="post.path">{{post.title}}</a>
      </h1>
      <span class="post-date">{{postDate}}</span>
      <div class="post-content preview">
        {{post.preview.plain}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      required: true
    },
    fullWidth: {
      required: false,
      default: false
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
