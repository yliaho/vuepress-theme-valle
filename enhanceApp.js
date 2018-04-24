import md from './utils/markdown'

export default ({ Vue, options, router }) => {
  Vue.mixin({
    computed: {
      $posts() {
        const { pages } = this.$site

        return pages
          .filter(({ path }) => this.$isPost(path))
          .map(({ excerpt, ...rest }) => {
            return {
              preview: {
                content: excerpt || rest.frontmatter.preview,
                rendered: !!excerpt ? md.render(excerpt) : null
              },
              ...rest
            }
          })
      }
    },

    methods: {
      $isPost(path) {
        const {
          themeConfig: { postDir }
        } = this.$site

        return path.startsWith(postDir || '/posts/')
      },

      $postQuery(filter) {
        return this.$posts.filter(
          typeof filter === 'function'
            ? filter
            : typeof filter === 'string'
              ? post => post.frontmatter[filter]
              : post => post
        )
      }
    }
  })
}
