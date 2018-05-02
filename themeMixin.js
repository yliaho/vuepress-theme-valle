//@ts-ignore
import pkg from './package.json'

const defaultColors = {
  base: '#000',
  textColor: ['#FFF', 'red'],
  primary: ['#44AF69', '#1D3461']
}

export default {
  computed: {
    $themeColors() {
      const { colors = defaultColors } = this.$site.themeConfig
      return colors
    }
  },

  methods: {
    $moduleMeta() {
      const {
        name,
        version,
        repository: { url }
      } = pkg

      return {
        name,
        version,
        url
      }
    }
  }
}
