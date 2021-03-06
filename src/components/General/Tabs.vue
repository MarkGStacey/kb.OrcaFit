<template>
<div class="post-card content-box p-0">
 <v-tabs>
      <!-- <v-tab>
        <v-icon>mdi-file-plus</v-icon>
      </v-tab> -->
      <v-tab>
        <g-link :to="'/'">Posts</g-link>
        </v-tab>
      <v-tab href="programs"><g-link :to="'Programs'">Programs</g-link></v-tab>
      <!-- <v-tab href="search-posts"><g-link :to="'search-posts'">SearchPosts</g-link></v-tab> -->
    </v-tabs>
</div>
</template>

<script>
export default {
  components: {
  }
}
</script>
