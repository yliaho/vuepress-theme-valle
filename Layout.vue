<template>
  <div class="theme-container" :class="pageClasses">
    <MainHero />
    <component class="main-content" :is="layout" />
    <ValleFooter/>
  </div>
</template>

<script>
import nprogress from 'nprogress'

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

  mounted() {
    // progress bar configuration
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path) {
        nprogress.start()
      }

      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
    })
  }
}
</script>

<style lang="stylus">
@import './styles/nanoreset.css';
@import './styles/theme.styl';
@import './styles/config.styl';
@import './styles/nprogress.styl';

.theme-container {
  display: grid;
  height: 100vh;
  grid-column-gap: 2rem;
  grid-template-rows: 200px 1fr minmax(min-content, 2rem);
  grid-template-columns: 1fr minmax(min-content, 1280px) 1fr;
  grid-template-areas: '-head head head-' '-cont cont cont-' 'foot foot foot';

  .hero {
    grid-area: head;
    padding-top: 2rem;
  }

  .main-content {
    grid-area: cont;
    margin-bottom: 4rem;
  }

  footer {
    grid-area: foot;
    background-color: black;
    padding: 0.5rem;
    font-size: 0.92rem;
    display: flex;
    justify-content: center;

    > * {
      color: white;
    }
  }

  @media screen and (max-width: $MDsm) {
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
  }
}
</style>
