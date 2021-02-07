<template>
  <Layout :show-logo="true">
    <Author :show-title="true" />
    <tabs/>
    <v-autocomplete
      id="search"
      v-model="select"
       :search-input.sync="searchTerm"
      cache-items
      label="Search Posts"
      :items="searchResults"
      item-text="title"
      item-value="id"
      />
      <b>{{searchTerm}}</b>
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
    searchTerm: '',
    select: null
  }),
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      let ret = this.$search.search({ query: searchTerm, limit: 5 })
      // debugger
      return ret
    }
  }
}
</script>
