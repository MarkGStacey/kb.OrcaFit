<template>
  <Layout>
    <div class="post-title">
      <Tabs/>
      <h1 class="post-title__text text-gray-900">
        {{ $page.post.title }}
      </h1>
        <g-link :to="baseUrl + 'programs/' + $page.post.path.replace('programs', '').replace(/\\|\//g,'') +'.md'">
          <v-icon>mdi-pencil</v-icon>Edit
        </g-link>
      <PostMeta :post="$page.post" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content prose prose-sm" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'
import Tabs from '~/components/General/Tabs.vue'


export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    Tabs
  },
  data: () => ({
    baseUrl: process.env.GRIDSOME_CONTENT_BASEURL
  }),
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: program (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">

.prose table{
  @apply border-gray-50 border border-solid;
  @apply bg-indigo-50;
}
.prose th{
  @apply border-gray-50 border border-solid;
  @apply bg-indigo-100;
}
.prose tr{
  @apply border-gray-50;
}
.prose td{
  @apply border-gray-50 border border-solid;
}
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
