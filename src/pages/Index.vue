<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->
    <!-- List posts -->
     <!-- <Tabs/> -->
     <Header/>
     <PostHeader/>
     </div>
    <br/>
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      <Pager :info="$page.posts.pageInfo"/>
      
    </div>
    
  </Layout>
</template>
<page-query>
query ($page: Int) {
  posts: allPost(perPage: 10, page: $page, sortBy: "title", order: ASC, filter: { published: { eq: true }})
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
          ...on Post {
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
import PostHeader from '~/components/General/PostHeader.vue'
import { Pager } from 'gridsome'
import SearchPosts from '~/components/General/SearchPosts.vue'

export default {
  components: {
    // Author,
    PostCard,
    Pager,
    Header,
    PostHeader,
    SearchPosts
    // Tabs
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
