<template>
  <Layout :show-logo="true">
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">
    {{ searchResults }}

  </Layout>
</template>


<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Tabs from '~/components/General/Tabs.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    Author,
    PostCard,
    Pager,
    Tabs
  },
  metaInfo: {
    title: 'Home'
  },
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 5 })
    }
  }
}
</script>
