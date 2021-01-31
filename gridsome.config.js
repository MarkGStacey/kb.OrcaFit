// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss-import')
const collections = [
  {
    query: `{
      allPost {
        edges {
          node {
            id
            title
            date (format: "D. MMMM YYYY")
          }
        }
      }
    }
    `,
    transformer: ({ data }) => data.allPost.edges.map(({ node }) => node),
    indexName: 'kb.OrcaFit', // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        modified: String(item.date)
      }
    }, // optional
    matchFields: ['slug', 'modified'], // Array<String> required with PartialUpdates
  },
]
module.exports = {
  siteName: 'Orca Fit Exercise Knowledge Base',
  siteDescription: 'A resource for building rehab as well as strength & conditioning programs',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Bodypart: '/bodypart/:id',
    Program: [{
      path: '/programs/:title',
      component: './src/templates/Program.vue'
    },
    {
      name: "edit",
      path: '/programedit/:title',
      component: './src/templates/ProgramEdit.vue'
    }],
    // Program: [{
    //   path: '/programs/:id',
    //   component: './src/templates/Program.vue'
    // },{
    //   path: '/content/programs/:title',
    //   component: './src/templates/Program.vue'
    // }]
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwind(),
          autoprefixer()
        ]
      }
    }
  },
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',      
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          },
          bodyparts: {
            typeName: 'Bodypart',
            create: true
          },
          equipment: {
            typeName: 'Equipment',
            create: true
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Program',
        path: 'content/programs/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
    // ,
    // {
    //   use: `gridsome-plugin-algolia`,
    //   options: {
    //     appId: 'X8QGZL1SEH',
    //     apiKey: 'da245f71d8e5c4b1b9beb99e113b44bf',
    //     collections,
    //     chunkSize: 10000, // default: 1000
    //     enablePartialUpdates: false, // default: false
    //   },
    // }
    // ,
    // {
    //   use: `gridsome-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     collections,
    //     chunkSize: 10000, // default: 1000
    //     enablePartialUpdates: true, // default: false
    //   },
    // }
  ],

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
