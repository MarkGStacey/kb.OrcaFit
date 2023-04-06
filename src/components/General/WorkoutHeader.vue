<template>
     <div class="content-box" style="padding:0px;">
       <v-toolbar>
      <SearchWorkouts/>
      </v-toolbar>
    </div>
</template>
<script>
import SearchWorkouts from '~/components/General/SearchWorkouts.vue'
export default {
  components: {
    SearchWorkouts
  }
}
</script>