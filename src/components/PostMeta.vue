<template>
   <div class="post-meta">
     <g-link :to="baseUrl + post.path.replace(/\\|\//g,'') +'.md'">
       <v-icon>mdi-pencil</v-icon>Edit
     </g-link>
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
        </template>
    </div>
</template>

<script>
export default {
  props: ['post']
,
  data: () => ({
    baseUrl: process.env.GRIDSOME_POSTS_BASEURL
  })
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>