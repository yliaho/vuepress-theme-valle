<template>
  <div class="theme-container" :class="pageClasses">
    <component :is="layout"/>
    <ValleFooter/>
  </div>
</template>

<script>
import Home from './layouts/Home.vue'
import Post from './layouts/Post.vue'
import ValleFooter from './components/ValleFooter.vue'

export default {
  name: 'layout',
  components: {
    Home,
    Post,
    ValleFooter
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
@import './styles/config.styl';

.theme-container {
  padding: 0 2.4em;

  @media screen and (max-width: $MDsm) {
    padding: 0 1em;
  }
}
</style>
