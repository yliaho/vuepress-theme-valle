# blog-vuepress-theme

> Simple [VuePress](https://github.com/vuejs/vuepress) theme with blogging support.

_Under development, not ready for use._

## Theme Config

Theme specific options in VuePress config.

```javascript
module.exports = {
  // The theme uses `title` and `description`
  title: 'Yliaho',
  description: 'My vuesome blog',

  // To use the theme from the node dependencies.
  theme: 'Valle'

  themeConfig: {
    // Author specific metadata. Used for homepage bio.
    author: {
      name: 'John Doe'
    },
    // defaults to '/posts/' if postDir isn't provided.
    postDir: '/posts/'
  }
}
```
