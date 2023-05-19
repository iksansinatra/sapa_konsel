<template>
  <dir>
    <q-page-container>
      <div class="bgx ">

          <div class="contain_center_full" style="margin-top:-35px">
            <a href="javascript:void(0);" @click="routex('/login')" class="" style="width:88px; height:88px; background-color:#55B1B3; border-radius:50%; display:flex; flex-wrap: wrap; align-items:center; justify-content:center">
              <img src="/img/logo_konsel.png" alt="" style="height:68px">
            </a>
              <img src="/img/sapa.png" style="width:293px" alt="">
              <div style="text-align: right !important;">
                <!-- <span>Ver. 1.0</span> -->
              </div>
          </div>
      </div>
    </q-page-container>

  </dir>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      key: ''
    }
  },
  methods: {
    routex(route) {
      this.$router.push(route);
    }
  },
  mounted () {
    ;
  },
}
</script>

<style lang="">
  
</style>
