import { compareAsc, compareDesc } from 'date-fns'
import fontawesome from '@fortawesome/fontawesome'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/fontawesome-free-brands'
import flatten from 'lodash.flatten'

import { md, stripMd } from './utils/index'
//@ts-ignore
import pkg from './package.json'

function orderPostsByDate(postCollection) {
  return postCollection.sort((a, b) =>
    compareDesc(a.frontmatter.date, b.frontmatter.date)
  )
}

export default ({ Vue, options, router, siteData: { themeConfig } }) => {
  fontawesome.library.add(faTwitter, faFacebook, faLinkedin, faInstagram)

  Vue.mixin({
    computed: {
      /**
       * @type {*}
       */
      $posts() {
        const { pages } = this.$site

        return orderPostsByDate(
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
  })
}
