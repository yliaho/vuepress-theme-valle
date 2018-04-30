<template>
  <div class="home-container">
    <MainHero />
    <section>
      <PostList>
        <AuthorBio/>
      </PostList>
    </section>
  </div>
</template>

<script>
import MainHero from '../components/MainHero.vue'
import PostList from '../components/PostList.vue'
import AuthorBio from '../components/AuthorBio.vue'

export default {
  components: {
    MainHero,
    PostList,
    AuthorBio
  }
}
</script>

<style lang="stylus">
</style>
