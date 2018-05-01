<template>
  <div class="theme-container" :class="pageClasses">
    <MainHero />
    <component :is="layout"/>
    <ValleFooter/>
  </div>
</template>

<script>
import Home from './layouts/Home.vue'
import Post from './layouts/Post.vue'
import MainHero from './components/MainHero.vue'
import ValleFooter from './components/ValleFooter.vue'

export default {
  name: 'layout',
  components: {
    Home,
    Post,
    MainHero,
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

  &.home-page {
    max-width: 1280px;
    margin: 0 auto;
  }

  &.post-page {
    max-width: 720px;
    margin: 0 auto;
  }

  @media screen and (max-width: $MDsm) {
    padding: 0 1em;
  }
}
</style>
