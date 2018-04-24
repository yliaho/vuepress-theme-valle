<template>
  <div class="home-container">
    <section>
      <h1>{{$site.title}}</h1>
      <h3>{{$site.description}}</h3>
    </section>
    <section>
      <PostList/>
    </section>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  components: {
    PostList
  }
}
</script>

<style>
</style>
