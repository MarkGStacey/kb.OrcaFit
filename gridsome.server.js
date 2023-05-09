// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
module.exports = function (api) {
  api.loadSource(async (actions) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api/
    const options =  {
      tag: 'orca',
      CONSUMER_KEY: process.env.CONSUMER_KEY,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      CODE: process.env.CODE
    }
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collection = actions.addCollection({
      typeName: "Research" || options.tag || 'PocketItems'
    })

    // const tagsCollection = actions.addCollection({
    //   typeName: 'PocketTags' || options.tag || 'PocketTags'
    // })
    // // // Get the consumer keys and tokens from the options
    // // const credentials = options.credentials || []

    // Get the tag to filter by from the options
    const tag = options.tag

    /*const authResponse = await axios.post('https://getpocket.com/v3/oauth/authorize', {
        consumer_key: options.CONSUMER_KEY,
        code: options.CODE
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Accept': 'application/x-www-form-urlencoded'
        }
      });*/
       const response = await axios.post('https://getpocket.com/v3/get', {
         consumer_key:  options.CONSUMER_KEY,
         access_token: options.ACCESS_TOKEN,
         tag: tag,
         detailType: "complete"
       },
       {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Accept': 'application/x-www-form-urlencoded'
          }
        })

      var pocketTags = new Array()
      // // Loop through the response data and add each item to the collection
      for (let key in response.data.list) {
        const item = response.data.list[key]
        var itemTags = new Array()
        for(let pocketTag in item.tags) {
          pocketTags.push("" + pocketTag)
          itemTags.push("" + pocketTag)
        }
        collection.addNode({
          id: item.item_id,
          title: ((item.resolved_title == "" ? item.given_title : item.resolved_title) || "").slice(0,100),
          date: new Date(item.time_added * 1000),
          path: item.resolved_url || "",
          preview_image: item.top_image_url,
          pocketTags: itemTags,
          // Index all of GetPocket's fields
          ...item
        })
        //          researchTags: (item) => {return item.tags.flat()},
      }
      // let uniqueTags = [...new Set(pocketTags)];
      // for (let key in uniqueTags) {
      //   tagsCollection.addNode({
      //     title: uniqueTags[key] || "Missing",
      //     name: uniqueTags[key] || "Missing",
      //     ...tag
      //   })
      // }
  })
}
