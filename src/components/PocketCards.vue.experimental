<template>
    <Layout>
      <v-container>
        <v-card
          class="ma-sm-2 my-5"
          max-width="375"
          v-for="item in $page.research.edges"
          :key="item.node.id"
          :href="item.node.path"
          target="_blank"
        >
        <!-- 
        --> 
          <v-img v-if="item.node.has_image" height="200px" :src="item.node.preview_image"> </v-img>
          <v-card-text>
            <h3 class="primary--text font-weight-bold mx-0 display-1">
              {{ item.node.title }}
            </h3>
            <br />
            <!-- <span class="subtitle-1">{{ item.node.author }}</span> -->
            <br />
            <span class="text--primary">
              <span>{{ item.node.date }}</span>
              <br />
              <span>{{ item.node.excerpt }}</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="orange">Read More</v-btn>
          </v-card-actions>
        </v-card>
    </v-container>
  </Layout>
</template>
<script>
</script>