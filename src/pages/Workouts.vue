<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->
    <!-- List posts -->
     <!-- <Tabs/> -->
     <Header/>
     <WorkoutHeader/>
    <div class="posts">
      <PostCard v-for="edge in $page.workouts.edges" :key="edge.node.id" :post="edge.node"/>
      <Pager :info="$page.workouts.pageInfo"/>
    </div>

  </Layout>
</template>
<page-query>
query ($page: Int) {
  workouts: allWorkout(perPage: 10, page: $page, sortBy: "title", order: DESC, filter: { published: { eq: true }})
     @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          date (format: "D. MMMM YYYY")
          timeToRead
          description
          cover_image (width: 770, height: 380, blur: 10)
          ...on Workout {
          id
          title
          path
          }
          path
          tags {
            id
            title
            path
          }
        }
      }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import Header from '~/components/General/Header.vue'
import WorkoutHeader from '~/components/General/WorkoutHeader.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    PostCard,
    Pager,
    WorkoutHeader,
    Header
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
