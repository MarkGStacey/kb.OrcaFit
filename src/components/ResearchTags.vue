<template>
        <v-container> 
        <v-chip style="margin: 2px" variant="elevated"
            v-for="(item, index) in $static.pocketTags.edges"
            :key="item.node.name"
            @click="fnEmit(item.node.id)"
        >
        {{ item.node.name }}</v-chip>
        </v-container>
</template>

<static-query>
query AllPocketTags ($page: Int) {
	pocketTags: allPocketTags ( perPage: 100000, page: $page, filter: { }),  @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    
    edges {
      node {
        id
        title
        name
      }
    }
  }
}
</static-query>

<script>

export default {
  components: {
  },
  methods :{
    fnEmit(tagName) {
        debugger
        this.$emit("tagclick", tagName)
    }
  }
};
</script>

