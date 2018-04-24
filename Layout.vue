<template>
  <div>
    <div class="posts">
      <div 
        class="post"
        v-for="{ title, preview, path } in $postQuery('published')" 
      >
        <h1 class="post.title"><a :href="path">{{title}}</a></h1>
        <div v-if="preview.rendered" v-html="preview.rendered" class="post-preview rendered" />
        <div v-else class="post-preview">
          {{preview.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>


