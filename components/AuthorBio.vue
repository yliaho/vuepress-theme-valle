<template>
  <section class="author-bio">
    <div class="bio-wrapper">
      <div 
        class="mug"
        :style="{
          backgroundColor: '#067BC2'
        }"
      />
      <div class="content">
        <h1 class="author-name">{{author.name}}</h1>
        <div class="bio-description">
          <Content/>
        </div>
        <Some/>
      </div>
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
@import '../styles/config.styl';

.author-bio {
  grid-row: span 2;
  display: flex;

  @media screen and (max-width: $MDlg) {
    margin: 0 0 2em 0;
  }

  .mug {
    height: 4.4rem;
    width: 4.4rem;
    border-radius: 50%;
    transform: translateY(-0.6em);
  }

  .content {
    // flex: 1;
    .author-name {
      margin-bottom: 0.5em;
    }

    .bio-description {
      padding-bottom: 1em;
    }
  }
}
</style>
