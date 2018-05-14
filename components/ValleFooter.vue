<template>
  <footer>
    <span>
      {{copyright}} –
      <a :href="$moduleMeta().url">{{$moduleMeta().name}}</a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'valle-footer',

  computed: {
    author() {
      const { author } = this.$site.themeConfig
      return author || ''
    },

    copyright() {
      return `Copyright © ${new Date().getFullYear()} ${this.author.name}`
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/config.styl';

footer {
}
</style>
