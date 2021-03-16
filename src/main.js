// Import main css
import '~/assets/style/index.scss'
import '~/css/main.css' /* https://mannes.tech/gridsome-tailwindcss/ */
import Vuetify from 'vuetify' /*https://vuetifyjs.com/en/features/icon-fonts/#material-design-icons*/
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { config, library } from '@fortawesome/fontawesome-svg-core'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import '@fortawesome/fontawesome-svg-core/styles.css'

// config.autoAddCss = false;
// library.add(faGithub, faTwitter)

import 'vuetify/dist/vuetify.min.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// if (process.isClient) {
  // import { Editor } from '@toast-ui/vue-editor'
  // import '@toast-ui/editor/dist/toastui-editor.css';
// }
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, {appOptions,  router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  }) ///TODO: Work out how to only do local
  
  /// Vuetify always needs an attribute data-app for menu items
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify({});
  // Set default layout as a global component

    Vue.component('Layout', DefaultLayout)
    // if (process.isClient) {
    //   Vue.component('editor', Editor)
    // }
  // Vue.component('font-awesome', FontAwesomeIcon)
}