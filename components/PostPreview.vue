<template>
  <div class="post">
    <h1 class="post.title">
      <a :href="post.path">{{post.title}}</a>
    </h1>
    <div v-if="post.preview.rendered" v-html="post.preview.rendered" class="post-preview rendered" />
    <div v-else class="post-preview">
      {{post.preview.content}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      required: true
    }
  }
}
</script>

<style>
</style>
