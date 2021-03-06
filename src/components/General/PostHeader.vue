<template>
     <div class="content-box" style="padding:0px;">
       <v-toolbar>
      <SearchPosts/>
      <NewPost/>
      </v-toolbar>
    </div>
</template>
<script>
import NewPost from '~/components/Dialogs/newPost.vue'
import SearchPosts from '~/components/General/SearchPosts.vue'
export default {
  components: {
    NewPost,
    SearchPosts
  }
}
</script>