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
              @click="save()"
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
import GitHub from 'github-api'
export default {
    data: () => ({
        dialog: false,
        valid: true,
        title: 'TestSaveToGithub',
        description: '',
        titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters',
        ]
    }),
    methods: {
      save () {
        let vueThis = this
        var cont = this.$refs.form.validate()
        if (cont) {
          debugger
          var config = {
            username: 'MarkGStacey',
            password: 'L0pt@8192', // Either your password or an authentication token if two-factor authentication is enabled
            auth: 'basic',
            repository: 'kb.OrcaFit',
            branchName: 'githubJs-newFile'
          };
          var github = new GitHub(config);
          var repo = github.getRepo('MarkGStacey', 'kb.OrcaFit');
          repo.writeFile(
            'githubJs-newFile', // e.g. 'master'
            'content/posts/' + this.title.replace(/\s+/g, '-').toLowerCase() + '.md', // e.g. 'blog/index.md'
            this.description, // e.g. 'Hello world, this is my new content'
            'Created ' + this.title, // e.g. 'Created new index'
            {author: 'Mark Stacey', encode: true, committer: 'MarkGStacey'},
            function(err) {
              console.log(err)
              debugger
            }
          );
        }
      }
    }
}
</script>
<style lang="scss" scoped>
.btn {
  @apply bg-indigo-400;
}
</style>