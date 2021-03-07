<template>
     <div class="content-box" style="padding:0px;">
       <v-toolbar>
      <SearchPrograms/>
      <NewProgram/>
      </v-toolbar>
    </div>
</template>
<script>
import NewProgram from '~/components/Dialogs/newProgram.vue'
import SearchPrograms from '~/components/General/SearchPrograms.vue'
export default {
  components: {
    NewProgram,
    SearchPrograms
  }
}
</script>