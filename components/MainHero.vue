<template>
  <section class="hero main-hero">
      <h1>{{$site.title}}</h1>
      <h2>{{$site.description}}</h2>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/colors.styl';

.hero {
  margin: 4em 0;
  padding: 0 0em;

  h1 {
    font-size: 1.6em;
    color: $color-primary-b;
  }

  h2 {
    font-size: 1.08em;
    border-left: 4px solid $color-primary-a;
    padding-left: 0.4em;
    color: lighten(black, 70%);
  }
}
</style>
