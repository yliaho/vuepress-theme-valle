<template>
  <section class="author-bio">
    <div class="bio-wrapper">
      <div 
        class="mug"
        :style="{
          backgroundColor: '#067BC2'
        }"
      />
      <h1 class="author-name">{{author.name}}</h1>
      <Content/>
      <Some/>
    </div>
  </section>
</template>

<script>
import Some from './Some.vue'

export default {
  components: {
    Some
  },

  computed: {
    author() {
      return this.$site.themeConfig.author
    }
  }
}
</script>

<style lang="stylus" scoped>
.author-bio {
  // padding: 2.4rem;
  // padding: 2rem 0;
  grid-row: span 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .mug {
    height: 4.4rem;
    width: 4.4rem;
    border-radius: 50%;
  }
}
</style>
