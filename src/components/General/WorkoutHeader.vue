<template>
     <div class="content-box" style="padding:0px;">
       <v-toolbar>
      <SearchWorkouts/>
      <NewWorkout class="p-2"/>
      </v-toolbar>
    </div>
</template>
<script>
import NewWorkout from '~/components/Dialogs/newWorkout.vue'
import SearchWorkouts from '~/components/General/SearchWorkouts.vue'
export default {
  components: {
    NewWorkout,
    SearchWorkouts
  }
}
</script>