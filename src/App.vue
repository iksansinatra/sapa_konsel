<template>
  <q-layout view="lHh lpr lFf">
    <!-- <Header/>
      <SideBar/> -->
    




        <router-view/>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

import SideBar from './components/SideBar'
import Header from './components/Header.vue'

export default {
  name: 'LayoutDefault',

  components: {
    SideBar, HelloWorld, Header
  },

  data() {
    return {
        test: ''
    }
  },

  methods: {
    checkSideBar() {
          if (this.$route.name === 'login') {
              return true;
          } else {
              return false;
          }
      }
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
