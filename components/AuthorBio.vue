<template>
  <section class="author-bio">
    <div class="bio-wrapper">
      <div class="mug" :style="{
          backgroundImage: `url(${$withBase($page.frontmatter.avatar)})`
        }" />
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

  .bio-wrapper {
    display: grid;
    grid-template-columns: 4.4rem 1fr;
    grid-gap: 1.4rem;

    @media screen and (max-width: $MDlg) {
      grid-template-columns: 1fr;
      grid-gap: 0.6rem;
    }

    .mug {
      background-color: $color-primary-a;
      background-size: 100%;
      height: 4.4rem;
      width: 4.4rem;
      border-radius: 50%;
    }

    .content {
      // flex: 1;
      .author-name {
        margin-bottom: 0.5em;
      }

      .bio-description {
        padding-bottom: 1em;

        @media screen and (max-width: $MDlg) {
          max-width: 540px;
        }
      }
    }
  }
}
</style>
