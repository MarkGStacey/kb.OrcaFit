<template>
        <v-autocomplete
          id="search"
          v-model="select"
          :search-input.sync="searchTerm"
          cache-items
          label="Search Posts"
          :items="searchResults"
          item-text="title"
          item-value="path"
          flat
          dense
          solo
          @change="changed"
          append-icon="search"
        />
</template>

<script>

export default {
  data: () => ({
    searchTerm: '',
    select: null
  }),
 computed: {
    searchResults () {
      try {
      const searchTerm = this.searchTerm
      if (!searchTerm || searchTerm.length < 3) return []
      let ret = this.$search.search({ query: searchTerm, limit: 5 })
      // debugger
      return ret
      } catch (ex) {
        console.log(ex)
        debugger
        return []
      }
    }
  },
  methods: {
    changed (evt) {
      console.log(evt)
      console.log(this.select)
      // debugger
      this.$router.push(evt)
    }
  }
}
</script>
