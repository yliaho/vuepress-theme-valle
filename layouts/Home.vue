<template>
  <div class="home-container">
    <MainHero />
    <section>
      <PostList/>
    </section>
  </div>
</template>

<script>
import MainHero from '../components/MainHero.vue'
import PostList from '../components/PostList.vue'

export default {
  components: {
    MainHero,
    PostList
  }
}
</script>

<style lang="stylus">
</style>
