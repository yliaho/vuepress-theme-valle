<template>
  <div class="home-container">
    <section>
      <PostList>
        <AuthorBio/>
      </PostList>
    </section>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import AuthorBio from '../components/AuthorBio.vue'

export default {
  components: {
    PostList,
    AuthorBio
  }
}
</script>

<style lang="stylus">
</style>
