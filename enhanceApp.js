import { compareAsc, compareDesc } from 'date-fns'
import { flatten } from 'lodash'
import { md, stripMd } from './utils/index'
//@ts-ignore
import pkg from './package.json'

export default ({ Vue, options, router, siteData: { themeConfig } }) => {
  Vue.mixin({
    computed: {
      /**
       * @type {*}
       */
      $posts() {
        const { pages } = this.$site

        return this._orderPostsByDate(
          pages
            .filter(({ path }) => this.$isPost(path))
            .map(({ excerpt, ...rest }) => {
              return {
                preview: {
                  rendered: !!excerpt ? md.render(excerpt) : null,
                  plain: rest.frontmatter.preview || stripMd(excerpt)
                },
                ...rest
              }
            })
        )
      },

      $allTags() {
        // Flatten tags from each post into one array and remove duplicates
        const allPostTags = flatten(
          this.$posts.map(post => post.frontmatter.tags)
        )
        return Array.from(new Set(allPostTags))
      }
    },

    methods: {
      $isPost(postPath) {
        const {
          themeConfig: { postDir }
        } = this.$site

        return postPath.startsWith(postDir || '/posts/')
      },

      $postQuery(filter) {
        return this.$posts.filter(
          typeof filter === 'function'
            ? filter
            : typeof filter === 'string'
              ? post => post.frontmatter[filter]
              : post => post
        )
      },

      _orderPostsByDate(postCollection) {
        return postCollection.sort((a, b) =>
          compareDesc(a.frontmatter.date, b.frontmatter.date)
        )
      },

      $moduleMeta() {
        const {
          name,
          version,
          repository: { url }
        } = pkg

        return {
          name,
          url
        }
      }
    }
  })
}
