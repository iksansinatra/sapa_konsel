<template>
  <dir>
    <q-page-container>

      <div class="bgx_login">
        <div style="">
            <img src="/img/logosapa.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 85px;
  width: 219px;">
            <!-- <div style="position:absolute; top:56px; right:14px; ">
                <img src="/img/logo_konsel.png" alt="" style="height:36px">
            </div> -->
        </div>

        <div class="judul_login">
            Sahabat Perempuan dan Anak
            Kabupaten Konawe Selatan
        </div>
        <div class="box_login">
            <div style="width:100%">
              <input type="text" placeholder="Username" class="inputbs">
            </div>

            <div style=" width:100%">
              <input type="password" placeholder="Password" class="inputbs" style="margin-top:20px">
            </div>

            <q-btn class="btn_login" style="margin-top:30px" flat @click="routex('/profil')">
                <span style="color:white; font-size:16px;">LOGIN</span>
            </q-btn>
            <q-btn class="btn_regis" style="margin-top:20px" flat @click="login('/registrasi')">
                <span style="color:white">REGISTRASI</span>
            </q-btn>
            <div class="use_login">
            login menggunakan
            </div>
            <div style="margin-top: 30px; text-align: center;">
            <img src="/img/google.png" style="margin: 0 15px; width: 40px;">
            <img src="/img/facebook.png" style="margin: 0 15px; width: 40px;">
            <img src="/img/twitter.png" style=" margin: 0 15px; width: 40px;">
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
  name: 'login',
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
    },

    login(route) {
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
