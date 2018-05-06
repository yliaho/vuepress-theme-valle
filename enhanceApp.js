import fontawesome from '@fortawesome/fontawesome'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/fontawesome-free-brands'
import postMixin from './mixins/postMixin'
import themeMixin from './mixins/themeMixin'

export default ({ Vue, options, router, siteData: { themeConfig } }) => {
  fontawesome.library.add(faTwitter, faFacebook, faLinkedin, faInstagram)

  Vue.mixin({
    computed: {
      ...postMixin.computed,
      ...themeMixin.computed
    },

    methods: {
      ...postMixin.methods,
      ...themeMixin.methods
    }
  })
}
