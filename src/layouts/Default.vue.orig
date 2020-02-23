<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right" data-app="true"><!--  /// Vuetify always needs an attribute data-app for menu items-->
        <v-menu offset-y>
        <template v-slot:activator="{ on, value }">
          <!-- <v-btn
            color="primary"
            v-on="on"
            dark
          >
            Dropdown
          </v-btn> -->
          <hamburger :open="value" @click="on.click($event)"></hamburger>
          <!-- <hamburger @click="debug(on, $event, value)"></hamburger>
          {{value}} -->
        </template>
        <v-list>
          <v-list-item key="1" @click.native="console.log('')">
            <v-list-item-title>Exercises</v-list-item-title>
          </v-list-item>
          <v-list-item key="2" @click.native="console.log('')">
            <v-list-item-title>Rehab</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-menu>
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>
<!-- 
    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      
    </footer> -->
    <footer-background></footer-background>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import FooterBackground from '~/components/General/FooterBackground.vue'
import Hamburger from '~/components/General/Hamburger.vue'
export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme,
    FooterBackground,
    Hamburger
  },
  methods:
  {
    debug(item, event, value) {
      debugger
      console.log(value)
      item.click(event)
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

// .footer {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: calc(var(--space) / 2);
//   text-align: center;
//   font-size: .8em;

//   > span {
//     margin: 0 .35em;
//   }

//   a {
//     color: currentColor;
//   }
// }
</style>
