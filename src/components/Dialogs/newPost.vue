<template>
 <v-dialog
        content-class="p-2"
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
      <ClientOnly>
    <MarkdownEditor v-model="body" class="p2"/>
    </ClientOnly>
    
    </v-form>
        </v-card>
      </v-dialog>
    
</template>

<script>
// import GitHub from 'github-api'
import {Octokit} from '@octokit/rest'
import { Base64 } from 'js-base64'
export default {
    data: () => ({
        auth: process.env.GRIDSOME_GITHUB_KB_ORCAFIT,
        dialog: false,
        valid: true,
        title: 'TestSaveToGithub',
        titleExists: false,
        description: '',
        body: '',
        titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters',
        // v => titleExists || 'Title exists already',
        ]
    }),
    computed: {
      template () {
        return `---
date:
author: mgs
published: true
title: ${this.title}
summary:
Muscles:
- 
equipment:
-
tags: 
- exercise
---
# ${this.title}
## Description
${this.description}
### Synonyms
#### Alternatives

### Progressions
#### Regressed versions (Progressions to get to this movement)

#### Progressive versions

### Cues

### Links

### Studies
`
      }
    },
    methods: {
      save () {
        let vueThis = this
        var cont = this.$refs.form.validate()
        console.log(this.template)
        if (cont) {
          const octokit = new Octokit({
            auth: vueThis.auth,
            userAgent: 'kb.OrcaFit',
            log: {
              debug: () => {
                // debugger
              },
              info: () => {},
              warn: console.warn,
              error: console.error
            }})
            data = octokit.repos.createOrUpdateFileContents({
              owner: 'MarkGStacey',
              repo: 'kb.OrcaFit',
              path: 'content/posts/' + '' + this.title.replace(/\s+/g, '-').toLowerCase() + '.md',
              message: 'Created: ' + this.title ,
              content: Base64.encode(this.template),
              committer: {
                name: 'Gridsome',
                email: 'fitness@aphelion.bi'
              },
              author: {
                name: 'Gridsome',
                email: 'fitness@aphelion.bi'
              },
            }).then( (data) => {
              console.log(data)
              vueThis.dialog = false
            }).catch( (err) => {
              console.log(err)
              if (err.status === 422) {
                vueThis.titleExists = false
                vueThis.$refs.form.validate()
              }
              debugger
            });
          // octokit.repos.createOrUpdateFileContents({
          //   owner,
          //   repo,
          //   path,
          //   message,
          //   content,
          //   committer.name,
          //   committer.email,
          //   author.name,
          //   author.email
          //       })
          // var config = {
          //   username: 'MarkGStacey',
          //   password: 'L0pt@8192', // Either your password or an authentication token if two-factor authentication is enabled
          //   auth: 'basic',
          //   repository: 'kb.OrcaFit',
          //   branchName: 'master'
          // };
          // var github = new GitHub(config);
          // var repo = github.getRepo('MarkGStacey', 'kb.OrcaFit');

          // repo.writeFile(
          //   'master', // e.g. 'master'
          //   '' + this.title.replace(/\s+/g, '-').toLowerCase() + '.md', // e.g. 'blog/index.md'
          //   this.description, // e.g. 'Hello world, this is my new content'
          //   'Created ' + this.title, // e.g. 'Created new index'
          //   {author: 'Mark Stacey', encode: true, committer: 'MarkGStacey'},
          //   function(err) {
          //     console.log(err)
          //     debugger
          //   }
          // );
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