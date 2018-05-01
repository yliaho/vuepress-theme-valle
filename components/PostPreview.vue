<template>
  <div 
    class="post-preview" 
    :style="`grid-column-end: ${fullWidth ? 'span 3' : 'initial'}`"
  >
    <div class="post-wrapper">
      <h1 class="post-title">
        <a :href="post.path">{{post.title}}</a>
      </h1>
      <span class="post-date">{{postDate}}</span>
      <div class="post-preview-content">
        {{postPreview}}
      </div>
    </div>
  </div>
</template>

<script>
import { truncateString } from '../utils/index'

export default {
  props: {
    post: {
      required: true
    },
    fullWidth: {
      required: false,
      default: false
    }
  },

  computed: {
    postPreview() {
      return truncateString(this.post.preview.plain, 85)
    },

    postDate() {
      const {
        frontmatter: { date }
      } = this.post

      return new Date(date).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl';

$line-height = 1.4rem;

.post-preview {
  height: 120px;
  border-radius: 3px;
  overflow: hidden;

  @media screen and (max-width: $MDlg) {
    height: initial;
  }

  .post-wrapper {
    .post-title {
      font-size: 1.08em;
      line-height: $line-height;
    }

    .post-date {
      font-size: 0.92em;
      display: inline-block;
      color: lighten(black, 70%);
      margin-bottom: 0.2em;
      font-weight: 100;
    }

    .post-preview-content {
      line-height: $line-height;
    }
  }
}
</style>
