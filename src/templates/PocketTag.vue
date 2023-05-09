<template>
  <Layout>
    <v-container>
      <Header/>
      <div class="d-flex-row d-block flex-wrap d-sm-inline-flex">
        <ResearchTags @tagclick="filterPosts"/>
        <PocketCards/>
      </div>
      <div class="text-center">
        <Pager
          linkClass="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--small primary mx-1"
          :info="$page.research.pageInfo"
        />
      </div>
    </v-container>
  </Layout>
</template>

<page-query>
query AllResearch ($id: ID!) {

research: allResearch (sortBy: "date", order: DESC filter: { pocketTags: {contains: [$id: ID!]} }),  @paginate {
  pageInfo {
    totalPages
    currentPage
  }
  
  edges {
    node {
      id
      title
      path
      has_image
      preview_image
      date (format: "MMMM D, YYYY")
      excerpt,
      pocketTags
    }
  }
}
}
</page-query>

<script>
import { Pager } from "gridsome";
import Header from '~/components/General/Header.vue'
import ResearchTags from '~/components/ResearchTags.vue'
import PocketCards from '~/components/PocketCards.vue'

export default {
  components: {
    Pager,
    Header,
    ResearchTags,
    PocketCards
  },
  methods: {
    filterPosts(tagName) {

    }
  }
};
</script>
