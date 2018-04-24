import md from './utils/markdown'

export default ({Vue, options, router}) => {
  Vue.mixin({
    computed: {
      $posts() {
        const { pages, themeConfig: { postDir } } = this.$site

        return pages
          .filter(page => page.path.startsWith(postDir || '/posts/'))
          .map(({excerpt, ...rest}) => {
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
      $postQuery(filter) {
        return this.$posts.filter(typeof filter === 'function' 
          ? filter 
          : typeof filter === 'string'
            ? post => post.frontmatter[filter]
            : post => post
        )
      }
    }
  })
}