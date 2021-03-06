<template>
 <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
      ><template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on">
          <v-icon
          class="tw-"
          >mdi-file-plus</v-icon>New Post
        </v-btn>
        </template>
        <v-card class="p-2">
        <v-card-actions
        class="justify-between">
        <v-btn
        class="btn"
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-btn
        class="btn"
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
        </v-card-actions>
        <v-form
    ref="form"
      v-model="valid"
      lazy-validation
      >
         <v-text-field
        v-model="title"
        :counter="100"
        :rules="titleRules"
        label="Title"
        required
      />
         <v-textarea
        v-model="description"
        label="Description"
        required
      />
    </v-form>
        </v-card>
      </v-dialog>
    
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        valid: true,
        title: '',
        description: '',
        titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters',
        ]
    })
}
</script>
<style lang="scss" scoped>
.btn {
  @apply bg-indigo-400;
}
</style>