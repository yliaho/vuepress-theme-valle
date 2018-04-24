<template>
  <div class="theme-container" :class="pageClasses">
    <Home v-if="isHome" />
  </div>
</template>

<script>
import Home from './layouts/Home.vue'

export default {
  components: {
    Home
  },

  computed: {
    isHome() {
      return this.$page.path === '/'
    },

    pageClasses() {
      return [
        {
          'post-page': this.$isPost(this.$page.path),
          'home-page': this.isHome
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import './styles/nanoreset.css';
@import './styles/theme.styl';

.theme-container {
  padding: 0 1.2em;
}
</style>
