<template>
  <footer>
    <span>
      {{copyright}} – <a :href="$moduleMeta().url">{{$moduleMeta().name}}</a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'valle-footer',

  computed: {
    author() {
      return this.$site.themeConfig.author
    },

    copyright() {
      return `Copyright © ${new Date().getFullYear()} ${this.author}`
    }
  }
}
</script>

<style>
</style>
