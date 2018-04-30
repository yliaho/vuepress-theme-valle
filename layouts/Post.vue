<template>
  <div class="post-container">
    <article class="post">
      <h1 class="post-title">{{$page.title}}</h1>
      <Content />
    </article>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '../styles/colors';

.post-container {
  max-width: 720px;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;

  .post-title {
    color: $color-primary-a;
    margin-bottom: 1rem;
  }
}
</style>
