<template>
  <div class="posts-container">
    <PostList v-if="postFilter()" :full-width="true" :filter="postFilter()" />
    <div v-else class="all-tags">
      <span v-for="tag in $allTags">
        {{tag}}
      </span>
    </div>
  </div>
</template> 

<script>
import PostList from '../components/PostList.vue'

export default {
  props: {
    tag: String
  },

  components: {
    PostList
  },

  methods: {
    postFilter() {
      if (!this.tag) return post => post

      return post => post.frontmatter.tags.includes(this.tag)
    }
  },

  mounted() {}
}
</script>

<style>
</style>
