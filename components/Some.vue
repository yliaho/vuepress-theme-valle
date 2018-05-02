<template>
  <div class="some">
    <span v-if="someLinks">
      <div 
        class="some-link"
        v-for="[name, link] of someLinks"
      >
        <a :href="link">
          <FontAwesome :icon="['fab', name]"/>
        </a>
      </div>
    </span>
  </div>
</template>

<script>
import FontAwesome from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesome
  },

  computed: {
    someLinks() {
      const { social = [] } = this.$site.themeConfig.author

      return Object.entries(social).filter(([name, _link]) => {
        const validSomePlatforms = [
          'facebook',
          'twitter',
          'linkedin',
          'instagram',
          'github'
        ]
        return validSomePlatforms.includes(name)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.some {
  span {
    display: flex;

    .some-link {
      font-size: 1.3em;

      a {
        padding-right: 0.8em;
      }

      &:not(:first-of-type) {
        a {
          padding-left: 0.8em;
        }
      }
    }
  }
}
</style>
