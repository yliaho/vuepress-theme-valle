<template>
  <div class="theme-container" :class="pageClasses">
    <component :is="layout"/>
  </div>
</template>

<script>
import Home from './layouts/Home.vue'
import Post from './layouts/Post.vue'

export default {
  name: 'layout',
  components: {
    Home,
    Post
  },

  computed: {
    layout() {
      const { path } = this.$page

      if (path === '/') {
        return 'home'
      } else {
        return 'post'
      }
    },

    pageClasses() {
      return `${this.layout}-page`
    }
  },

  mounted() {}
}
</script>

<style lang="stylus">
@import './styles/nanoreset.css';
@import './styles/theme.styl';

.theme-container {
  padding: 0 1.2em;
}
</style>
